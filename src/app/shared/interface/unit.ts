export interface Unit {
    Id: number;
    BuildingNumber: string;
    UnitType: number;
    Apartment: number;
    UnitTypeName: string;
    UnActive: boolean;
    UserId: number;
    UserName: string;
    RegisterDateTime: string | null;  // Assuming the type is string or null
    UnActiveDateTime: string | null;  // Adjusted to potentially include null
  }