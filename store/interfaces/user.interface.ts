import type { IBaseRecord } from "~/types/base";
import type { ISocial } from "./social.interface";

export enum EUserRole {
  User = "User",
  Admin = "Admin",
}

export interface IUser extends IBaseRecord {
  name: string;
  displayName: string;
  avatar: string;
  email: string;
  password: string;
  role: EUserRole;
  jobTitle: string;
  introduction: string;
  token: string;
  socials: ISocial[];
}


export interface IPayloadEditProfile{
  name?: string;
  displayName?: string;
  avatar?: string;
  email?: string;
  password?: string;
  role?: EUserRole;
  jobTitle?: string;
  introduction?: string;
}