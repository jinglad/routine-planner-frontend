import { AuthService } from "@/src/modules/Authentication/auth.service";
import { TokenModel } from "@/src/shared/interface";
import { CallbacksOptions, NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

async function refreshAccessToken(tokenObject: TokenModel) {
  try {
    const tokenResponse = await AuthService.refreshAccessToken(tokenObject); // Get a new set of tokens with a refreshToken
    return {
      ...tokenObject,
      accessToken: tokenResponse.data.token,
      accessTokenExpiry: tokenResponse.data.tokenExpiryTime,
      refreshToken: tokenResponse.data.refreshToken,
    };
  } catch (error) {
    return {
      ...tokenObject,
      error: "RefreshAccessTokenError",
    };
  }
}

const providers = [
  CredentialsProvider({
    name: "Credentials",
    credentials: {},
    authorize: async (credentials: any) => {
      try {
        const loginResponse = await AuthService.login(credentials); // Authenticate user with credentials

        // console.log(loginResponse);

        if (loginResponse.data.tokenInfo.accessToken) {
          loginResponse.data.email = credentials.email;
          return loginResponse.data;
        }
        return null;
      } catch (e: any) {
        const errorObject = e?.data?.error?.messages;
        // console.log(e);
        throw new Error(JSON.stringify(errorObject));
      }
    },
  }),
];

const callbacks: Partial<CallbacksOptions> = {
  jwt: async ({ token, user }: any) => {
    if (user) {
      const { tokenInfo, userInfo } = user;
      const {
        accessToken,
        accessTokenExpiryTime,
        refreshToken,
        refreshTokenExpiryTime,
      } = tokenInfo;
      // This will only be executed at login. Each next invocation will skip this part.
      token.accessToken = accessToken;
      token.accessTokenExpiry = accessTokenExpiryTime;
      token.refreshToken = refreshToken;
      token.refreshTokenExpiryTime = refreshTokenExpiryTime;
      token.userInfo = userInfo;
    }

    const shouldRefreshTime = Math.round(
      new Date(token.accessTokenExpiry).getTime() - 10 * 60 * 1000 - Date.now()
    );

    // If the token is still valid, just return it.
    if (shouldRefreshTime > 0) {
      return Promise.resolve(token);
    } else {
      token = await refreshAccessToken(token);
    }

    // If the call arrives after 23 hours have passed, we allow to refresh the token.

    return Promise.resolve(token);
  },
  session: async ({ session, token }: any) => {
    const { userInfo, accessToken, accessTokenExpiry } = token;
    session.user = userInfo;
    session.accessToken = accessToken;
    session.accessTokenExpiry = accessTokenExpiry;
    session.error = token.error;

    return Promise.resolve(session);
  },
  async redirect({ url, baseUrl }) {
    return process.env.NEXT_PUBLIC_NEXTAUTH_URL || url;
  },
};

export const options: NextAuthOptions = {
  providers,
  callbacks,
  pages: { signIn: "/", signOut: "/", error: "/" },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  jwt: { maxAge: 60 * 60 * 24 * 30 }, //default
};
