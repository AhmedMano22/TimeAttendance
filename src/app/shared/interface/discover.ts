export interface discover {
    Id: number;
    Description: string;
    Title: string;
    UnActive: boolean;
    UserId: number;
    UserName: string;
    RegisterDateTime: string | null; 
    UnActiveDateTime: string | null; 
    Phone: string;
    Lat: string;
    Long: string;
    Facebook: string;
    twitter: string;
    instagram: string;
    whatsApp: string;
    Address:string,
    sat: string;
    Sun: string;
    Mon: string;
    Tue: string;
    Wed: string;
    Thr: string;
    Fri: string;
    Logo64: string;
    Pic64: string;
    Logo: string;
    [key: string]: any;
  }
  