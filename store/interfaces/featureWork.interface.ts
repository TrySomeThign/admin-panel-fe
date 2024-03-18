/* eslint-disable no-unused-vars */
export enum ETypeFeatureWork {
  Coding = "Coding",
  Design = "Design",
  UIUX = "UIUX",
  ContentCreator = "ContentCreator",
}

export interface IFeatureWork {
  id: string;
  title: string;
  image: string;
  type: ETypeFeatureWork;
  link: string;
}
