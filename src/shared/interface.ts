export interface TokenModel {
  accessToken: string;
  accessTokenExpiry: string;
  refreshToken: string;
}

export interface RefreshTokenPostModel {
  accessToken: string;
  refreshToken: string;
}
