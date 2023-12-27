import type { IBaseRecord, IFilterBase } from "~/types/base";
import type { ICategoryProject } from "./projectCategory.interface";
import type { ISocial } from "./social.interface";
import type { IUser } from "./user.interface";

export interface IFilterGetAllProjects extends IFilterBase {
  categoryId: string;
}

export interface IProject extends IBaseRecord {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  author: IUser;
  socials: ISocial[];
  category: ICategoryProject;
}
