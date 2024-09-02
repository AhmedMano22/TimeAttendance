export interface department {
  Id: number;
  name: string;
  UnActive: boolean;
  UserId: number;
  UserName: string;
  RegisterDateTime: string;
  UnActiveDateTime: string;
  Phone: string;
  Sat: string | null;
  Sun: string | null;
  Mon: string | null;
  Tue: string | null;
  Wed: string | null;
  Thr: string | null;
  Fri: string | null;
    [key: string]: any;
  }