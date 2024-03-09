export interface LoginModel {
  email: string;
  password: string;
  tenantId?: string;
}

export interface RegistrationModel extends LoginModel {
  name: string;
}
