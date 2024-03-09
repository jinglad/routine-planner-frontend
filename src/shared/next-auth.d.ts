import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken: string;
    accessTokenExpiry: string;
    user: {
      name: string;
      email: string;
    };
  }
}
