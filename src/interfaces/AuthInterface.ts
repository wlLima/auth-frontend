export interface ILogin{
  email: string;
  password: string;
}

export type Auth = {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}