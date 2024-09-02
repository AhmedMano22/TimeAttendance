export interface UserInfo {
  status: string;
  UsId: number;
  Name: string;
  Image: string | null;
  Job: string | null;
  Department: string | null;
  Year: string | null;
  Active: boolean | null;
  Audit: boolean | null;
  Message: string | null;
  ImageRequired: boolean | null;
  CompLog: boolean | null;
  CompNew: boolean | null;
  CompEdit: boolean | null;
  CompDelete: boolean | null;
}
