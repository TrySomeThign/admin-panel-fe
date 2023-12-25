import type { IBaseRecord } from "~/types/base";
import type { IUser } from "./user.interface";

export interface ISocial extends IBaseRecord {
  title: string;
  url: string;
  author: IUser;
}
