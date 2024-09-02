export interface PendingBookingRequest {
  Id: number;
  Note: string;
  Replay: string;
  Date: string;
  Time: string;
  Price: number;
  RegisterDateTime: string | null;
  Days: number;
  UserId: number;
  MemberName: string;
  MemberPhone: string;
  MemberEmail: string;
  BookingName: string;
  UnitName: string;
}
