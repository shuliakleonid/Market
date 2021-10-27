
export interface Token {
  token:string;
}
export interface SignIn {
  email:string;
  password:string;
}
export interface User {
  email:string;
  first_name:string;
  last_name:string;
  phone:string;
  birth_date:string;
}

export interface SingUpType {
  message:string;
}

export interface SingUp {
  first_name:string;
  last_name:string;
  email:string;
  phone:string;
  birth_date:string;
  password:string;
}
