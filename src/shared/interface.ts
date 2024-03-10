export interface TokenModel {
  accessToken: string;
  accessTokenExpiry: string;
  refreshToken: string;
}

export interface RefreshTokenPostModel {
  accessToken: string;
  refreshToken: string;
}

export interface ICommonResponse<T> {
  statusCode: number;
  message: string;
  success: boolean;
  data: T;
}
