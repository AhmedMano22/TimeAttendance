import { HttpClient, HttpParams } from "@angular/common/http";
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
/* Employee */
getEmployee() {
  return this._HttpClient.get(this.url + "/Employee/GetAll");
}
addEmployee(body: any) {
  return this._HttpClient.post(this.url + "/Employee/Create", body);
}
deleteEmployee(id: number) {
  return this._HttpClient.delete(this.url + `/Employee/Delete/${id}`);
}
getEmployeeByID(id: number) {
  return this._HttpClient.get(this.url + `/Employee/GetById/${id}`);
}
UpdateEmployee( body: any) {
  return this._HttpClient.post(this.url + `/Employee/Update`, body);
}
/* Public Holiday */
GetAllPublicHolidaysType(){
  return this._HttpClient.get(this.url + "/PublicHoliday/GetAllPublicHolidaysType");
}
getPublicHoliday() {
  return this._HttpClient.get(this.url + "/PublicHoliday/GetAll");
}
addPublicHoliday(body: any) {
  return this._HttpClient.post(this.url + "/PublicHoliday/Create", body);
}
deletePublicHoliday(id: number) {
  return this._HttpClient.delete(this.url + `/PublicHoliday/Delete/${id}`);
}
getPublicHolidayByID(id: number) {
  return this._HttpClient.get(this.url + `/PublicHoliday/GetById/${id}`);
}
UpdatePublicHoliday( body: any) {
  return this._HttpClient.post(this.url + `/PublicHoliday/Update`, body);
}
/* Work Time */
getWorkTime() {
  return this._HttpClient.get(this.url + "/WorkingTime/GetAll");
}
addWorkTime(body: any) {
  return this._HttpClient.post(this.url + "/WorkingTime/Create", body);
}
deleteWorkTime(id: number) {
  return this._HttpClient.delete(this.url + `/WorkingTime/Delete/${id}`);
}
getWorkTimeByID(id: number) {
  return this._HttpClient.get(this.url + `/WorkingTime/GetById/${id}`);
}
UpdateWorkTime( body: any) {
  return this._HttpClient.post(this.url + `/WorkingTime/Update`, body);
}
/* Exception Work Time */
getExceptionWorkTime() {
  return this._HttpClient.get(this.url + "/ExceptionWorkingTime/GetAll");
}
addExceptionWorkingTime(body: any) {
  return this._HttpClient.post(this.url + "/ExceptionWorkingTime/Create", body);
}
deleteExceptionWorkingTime(id: number) {
  return this._HttpClient.delete(this.url + `/ExceptionWorkingTime/Delete/${id}`);
}
getExceptionWorkingTimeByID(id: number) {
  return this._HttpClient.get(this.url + `/ExceptionWorkingTime/GetById/${id}`);
}
UpdateExceptionWorkingTime( body: any) {
  return this._HttpClient.post(this.url + `/ExceptionWorkingTime/Update`, body);
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


/* transactions */
getTransactions(leavesTypeId?: number, TransactionStatusId?: string) {
  let params = new HttpParams();
  
  // Append parameters if they are provided
  if (leavesTypeId) {
    params = params.append('LeavesTypeId', leavesTypeId.toString());
  }
  
  if (TransactionStatusId) {
    params = params.append('TransactionStatusId', TransactionStatusId.toString());
  }
  
  return this._HttpClient.get(this.url + "/Transaction/GetAll", { params });
}
//  getTransactions() {
//   return this._HttpClient.get(this.url + "/Transaction/GetAll");
// }
addTransaction(body: any) {
  return this._HttpClient.post(this.url + "/Transaction/Create", body);
}
deleteTransaction(id: number) {
  return this._HttpClient.delete(this.url + `/Transaction/Delete/${id}`);
}
getTransactionByID(id: number) {
  return this._HttpClient.get(this.url + `/Transaction/GetById/${id}`);
}
UpdateTransaction( body: any) {
  return this._HttpClient.post(this.url + `/Transaction/Update`, body);
}

 /* Leaves */
//  getLeaves() {
//   return this._HttpClient.get(this.url + "/Leave/GetAll");
// }
getLeaves(leavesTypeId?: number, name?: string) {
  let params = new HttpParams();
  
  // Append parameters if they are provided
  if (leavesTypeId) {
    params = params.append('LeavesTypeId', leavesTypeId.toString());
  }
  
  if (name) {
    params = params.append('Name', name);
  }
  
  return this._HttpClient.get(this.url + "/Leave/GetAll", { params });
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

GetAllLeavesType() {
  return this._HttpClient.get(this.url + "/Leave/GetAllLeavesType");
}
GetAllLeaveRules() {
  return this._HttpClient.get(this.url + "/Leave/GetAllLeaveRules");
}
GetAllLeaveVaces() {
  return this._HttpClient.get(this.url + "/Leave/GetAllLeaveVaces");
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
