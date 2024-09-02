import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url: string = "https://65.108.96.96:19000/api";
  constructor(private _HttpClient: HttpClient) {}

  /* Announcements */
  getAnnouncements() {
    return this._HttpClient.get(this.url + "/Announcements");
  }
  addAnnounce(body: any) {
    return this._HttpClient.post(this.url + "/Announcements", body);
  }
  deleteAnnounce(id: number) {
    return this._HttpClient.delete(this.url + `/Announcements/${id}`);
  }
  getAnnounceByID(id: number) {
    return this._HttpClient.get(this.url + `/Announcements/${id}`);
  }
  UpdateAnnounce(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Announcements/${id}`, body);
  }

  /* Discovers */
  getDiscovers() {
    return this._HttpClient.get(this.url + "/Discover");
  }
  addDiscover(body: any) {
    return this._HttpClient.post(this.url + "/Discover", body);
  }
  deleteDiscover(id: number) {
    return this._HttpClient.delete(this.url + `/Discover/${id}`);
  }
  getDiscoverByID(id: number) {
    return this._HttpClient.get(this.url + `/Discover/${id}`);
  }
  UpdateDiscover(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Discover/${id}`, body);
  }

  /* Department */
  getDepartments() {
    return this._HttpClient.get(this.url + "/Department");
  }
  addDepartment(body: any) {
    return this._HttpClient.post(this.url + "/Department", body);
  }
  deleteDepartment(id: number) {
    return this._HttpClient.delete(this.url + `/Department/${id}`);
  }
  getDepartmentByID(id: number) {
    return this._HttpClient.get(this.url + `/Department/${id}`);
  }
  UpdateDepartment(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Department/${id}`, body);
  }

  /* Booking */
  getBooking() {
    return this._HttpClient.get(this.url + "/Booking");
  }
  addBooking(body: any) {
    return this._HttpClient.post(this.url + "/Booking", body);
  }
  deleteBooking(id: number) {
    return this._HttpClient.delete(this.url + `/Booking/${id}`);
  }
  getBookingByID(id: number) {
    return this._HttpClient.get(this.url + `/Booking/${id}`);
  }
  UpdateBooking(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Booking/${id}`, body);
  }

  getBookingList() {
    return this._HttpClient.get(this.url + "/Booking/BookingListAddList");
  }
  getBookingNames() {
    return this._HttpClient.get(this.url + "/Booking/List");
  }
  BookingListadd(body: any) {
    return this._HttpClient.post(this.url + "/Booking/BookingListAdd", body);
  }
  deleteBookingList(id: number) {
    return this._HttpClient.delete(
      this.url + `/Booking/BookingListDelete/${id}`
    );
  }
  getBookingListByID(id: number) {
    return this._HttpClient.get(
      this.url + `/Booking/BookingListAddListByID/${id}`
    );
  }
  UpdateBookingList(id: number, body: any) {
    return this._HttpClient.put(
      this.url + `/Booking/BookingListEdit/${id}`,
      body
    );
  }

  getPendingBookings() {
    return this._HttpClient.get(this.url + "/Booking/PendingBooking");
  }
  PendingBookingsReply(id: number, body: any) {
    return this._HttpClient.put(
      this.url + `/Booking/PendingBookingReplay/${id}`,
      body
    );
  }
  getPendingBookingByID(id: number) {
    return this._HttpClient.get(this.url + `/Booking/PendingBooking/${id}`);
  }

  /* Request */
  getRequest() {
    return this._HttpClient.get(this.url + "/Request");
  }
  addRequest(body: any) {
    return this._HttpClient.post(this.url + "/Request", body);
  }
  deleteRequest(id: number) {
    return this._HttpClient.delete(this.url + `/Request/${id}`);
  }
  getRequestByID(id: number) {
    return this._HttpClient.get(this.url + `/Request/${id}`);
  }
  UpdateRequest(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Request/${id}`, body);
  }
  getRequestList() {
    return this._HttpClient.get(this.url + "/Request/RequestList");
  }
  getRequestListByID(id: number) {
    return this._HttpClient.get(this.url + `/Request/RequestList/${id}`);
  }
  UpdateRequestList(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Request/RequestList/${id}`, body);
  }

  /* inquires */
  getinquires() {
    return this._HttpClient.get(this.url + "/Inquires");
  }
  Updateinquire(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Inquires/${id}`, body);
  }
  getinquireByID(id: number) {
    return this._HttpClient.get(this.url + `/Inquires/${id}`);
  }

  /* units */
  getUnitType() {
    return this._HttpClient.get(this.url + "/Coding/UnitType");
  }
  getUnits() {
    return this._HttpClient.get(this.url + "/Unit");
  }
  addUnit(body: any) {
    return this._HttpClient.post(this.url + "/Unit", body);
  }
  deleteUnit(id: number) {
    return this._HttpClient.delete(this.url + `/Unit/${id}`);
  }
  getUnitByID(id: number) {
    return this._HttpClient.get(this.url + `/Unit/${id}`);
  }
  UpdateUnit(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Unit/${id}`, body);
  }

  /* register */
  getPendingOwners() {
    return this._HttpClient.get(this.url + "/Register");
  }
  getPendingOwnerByID(id: number) {
    return this._HttpClient.get(this.url + `/Register/${id}`);
  }
  Reject(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Register/Reject/${id}`, body);
  }
  accept(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Register/Accepet/${id}`, body);
  }

  /* pending units */
  getPendingUnits() {
    return this._HttpClient.get(this.url + "/Register/PendingUnit");
  }
  getPendingUnitByID(id: number) {
    return this._HttpClient.get(this.url + `/Register/PendingUnit/${id}`);
  }
  RejectUnit(id: number, body: any) {
    return this._HttpClient.put(
      this.url + `/Register/PendingUnitReject/${id}`,
      body
    );
  }
  acceptUnit(id: number, body: any) {
    return this._HttpClient.put(
      this.url + `/Register/PendingUnitAccepet/${id}`,
      body
    );
  }

  getOwners() {
    return this._HttpClient.get(this.url + "/Owner");
  }
  getOwnerByID(id: number) {
    return this._HttpClient.get(this.url + `/Owner/${id}`);
  }
  getRegistrationTypeNames() {
    return this._HttpClient.get(this.url + "/Coding/RegistrationType");
  }
  UpdateOwner(id: number, body: any) {
    return this._HttpClient.put(this.url + `/Owner/${id}`, body);
  }
  deleteOwner(id: any) {
    return this._HttpClient.delete(this.url + `/Owner/Delete/${id}`);
  }
  /* login */
  login(username: string, password: string) {
    return this._HttpClient.get(
      this.url + `/UserRole/login/${username}/${password}`
    );
  }
  userauthorizedtoPage(userId: any, pageId: any) {
    return this._HttpClient.get(
      this.url + `/UserRole/GetUserSystemPage/${userId}/${pageId}`
    );
  }

  getUsers() {
    return this._HttpClient.get(this.url + `/UserRole/getusers`);
  }
  getuserpermissionbyid(id: number) {
    return this._HttpClient.get(
      this.url + `/UserRole/GetUserSystemPageFull/${id}`
    );
  }
  edituserpermission(Id: number, data: any) {
    return this._HttpClient.put(
      this.url + `/UserRole/UpdateUserPermission/${Id}`,
      data
    );
  }
  getpermission() {
    return this._HttpClient.get(this.url + `/UserRole/SystemPage`);
  }
  addpermission1(data: any) {
    return this._HttpClient.post(this.url + `/UserRole/NewUserRolearr`, data);
  }
  deleteUser(id: any) {
    return this._HttpClient.delete(this.url + `/UserRole/Deleteuser/${id}`);
  }
  changePassword(id: any, data: any) {
    return this._HttpClient.post(
      this.url + `/UserRole/ChangePassword/${id}`,
      data
    );
  }

  /* dashboard api */
  getdashboardData() {
    return this._HttpClient.get(this.url + `/DashBoard`);
  }
}
