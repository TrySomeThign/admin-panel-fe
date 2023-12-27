import type { IBaseRecord } from "~/types/base";
import type { IProject } from "./project.interface";

export enum ETypeCategory {
  Web = "Web",
  Design = "Design",
  UIUX = "UIUX",
}

export interface ICategoryProject extends IBaseRecord {
  type: ETypeCategory;
  description: string;
  icon: string;
  projects: IProject[];
}
