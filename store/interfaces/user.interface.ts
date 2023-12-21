export enum EUserRole {
  User = "User",
  Admin = "Admin",
}

export interface IUser {
  name: string;
  displayName: string;
  avatar: string;
  email: string;
  password: string;
  role: EUserRole;
  jobTitle: string;
  introduction: string;
  token:string;
}
