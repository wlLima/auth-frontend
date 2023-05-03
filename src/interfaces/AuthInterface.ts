export interface ILogin{
  email: string;
  password: string;
}

export type Auth = {
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void;
  handleRegister: (event: React.FormEvent<HTMLFormElement>) => void;
}