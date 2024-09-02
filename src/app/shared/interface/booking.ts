// booking.model.ts
export interface Booking {
  Id: number;
  Date: string;
  Time: string;
  Price: number;
  RegisterDateTime: string | null;
  UserId: number;
  BookingID: number;
  BookingName: string;
}
