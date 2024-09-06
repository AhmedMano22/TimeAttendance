import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url: string = "http://65.108.96.96:1899/api";
  constructor(private _HttpClient: HttpClient) {}

  /* login */
  login(body:any) {
    return this._HttpClient.post(
      this.url + `/TokenAuth/Authenticate`,body
    );
  }

 /* Department */
 getDepartments() {
  return this._HttpClient.get(this.url + "/Department/GetAll");
}
addDepartment(body: any) {
  return this._HttpClient.post(this.url + "/Department/Create", body);
}
deleteDepartment(id: number) {
  return this._HttpClient.delete(this.url + `/Department/Delete/${id}`);
}
getDepartmentByID(id: number) {
  return this._HttpClient.get(this.url + `/Department/GetById/${id}`);
}
UpdateDepartment( body: any) {
  return this._HttpClient.post(this.url + `/Department/Update`, body);
}


 /* JOBS */
 getJobs() {
  return this._HttpClient.get(this.url + "/Job/GetAll");
}
addJob(body: any) {
  return this._HttpClient.post(this.url + "/Job/Create", body);
}
deleteJob(id: number) {
  return this._HttpClient.delete(this.url + `/Job/Delete/${id}`);
}
getJobByID(id: number) {
  return this._HttpClient.get(this.url + `/Job/GetById/${id}`);
}
UpdateJob( body: any) {
  return this._HttpClient.post(this.url + `/Job/Update`, body);
}

 /* Location */
 getLocations() {
  return this._HttpClient.get(this.url + "/Location/GetAll");
}
addLocation(body: any) {
  return this._HttpClient.post(this.url + "/Location/Create", body);
}
deleteLocation(id: number) {
  return this._HttpClient.delete(this.url + `/Location/Delete/${id}`);
}
getLocationByID(id: number) {
  return this._HttpClient.get(this.url + `/Location/GetById/${id}`);
}
UpdateLocation( body: any) {
  return this._HttpClient.post(this.url + `/Location/Update`, body);
}



 /* Shift */
 getShifts() {
  return this._HttpClient.get(this.url + "/Shift/GetAll");
}
addShift(body: any) {
  return this._HttpClient.post(this.url + "/Shift/Create", body);
}
deleteShift(id: number) {
  return this._HttpClient.delete(this.url + `/Shift/Delete/${id}`);
}
getShiftByID(id: number) {
  return this._HttpClient.get(this.url + `/Shift/GetById/${id}`);
}
UpdateShift( body: any) {
  return this._HttpClient.post(this.url + `/Shift/Update`, body);
}


 /* Leaves */
 getLeaves() {
  return this._HttpClient.get(this.url + "/Leave/GetAll");
}
addLeave(body: any) {
  return this._HttpClient.post(this.url + "/Leave/Create", body);
}
deleteLeave(id: number) {
  return this._HttpClient.delete(this.url + `/Leave/Delete/${id}`);
}
getLeaveByID(id: number) {
  return this._HttpClient.get(this.url + `/Leave/GetById/${id}`);
}
UpdateLeave( body: any) {
  return this._HttpClient.post(this.url + `/Leave/Update`, body);
}

 /* System Page */
 getSystemPage() {
  return this._HttpClient.get(this.url + "/SystemPage/GetAll");
}

/* users */
getUsers() {
  return this._HttpClient.get(this.url + `/User/GetAll`);
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
  return this._HttpClient.delete(this.url + `/User/Delete/${id}`);
}
changePassword(id: any, data: any) {
  return this._HttpClient.post(
    this.url + `/UserRole/ChangePassword/${id}`,
    data
  );
}





















 


 
}
