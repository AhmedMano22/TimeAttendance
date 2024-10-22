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
export interface LoginResponse {

    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
    role: string;
    userSystemPage: SystemPage[];

}

export interface SystemPage {
  systemPageId: number;
  systemPageNameAr: string;
  systemPageNameEn: string;
  new: boolean;
  edit: boolean;
  delete: boolean;
  login: boolean;
  id: number;
}
