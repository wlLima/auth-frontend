export interface ILogin{
  email: string;
  password: string;
}

export type Auth = {
  login: ILogin;
}