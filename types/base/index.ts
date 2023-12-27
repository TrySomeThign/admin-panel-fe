export interface IError {
  message: string;
  status: string;
  stack: string;
}

export interface IBaseRecord {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface IFilterBase {
  limit?: number;
  page?: number;
}
