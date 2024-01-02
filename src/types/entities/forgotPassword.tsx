export interface TForgotPassword {
  email: string;
}

export interface TResetPassword {
  token: string;
  password: string;
  confirmPassword: string;
}
