export interface request {
    Id: number;
    Title: string;
    UnActive: boolean;
    UserId: number;
    UserName: string;
    RegisterDateTime: string | null;  // Assuming the type is string or null
    UnActiveDateTime: string | null;  // Adjusted to potentially include null
    Logo64: string;
    Logo: string;
  }