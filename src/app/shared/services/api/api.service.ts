import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  url: string = "http://65.108.96.96:1899/api";
  //url: string = "http://172.25.11.12:12000/api";
  constructor(private _HttpClient: HttpClient) {}

  /* login */
  login(body:any) {
    return this._HttpClient.post(
      this.url + `/TokenAuth/Authenticate`,body
    );
  }
 
  /* DashBoard */
  GetDashboard() {
    return this._HttpClient.get(this.url + `/StoredProcedure/GetStatistics`);
  }
  
/* All UserId GET */
 getDepartmentsByuser(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/UserDepartment/GetAllByUserId?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
}
getLocationsByuser(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/UserLocation/GetAllByUserId?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
}
getReportsByuser(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/UserReport/GetAllByUserId?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
}
 
getAllTimeTableByuser(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/UserTimeTableH/GetAllByUserId?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
}

getLeavesByuser(leavesTypeId?: any,pageNumber: any='', pageSize: any='',Name:string='') {
  let params = new HttpParams();
  
  // Append parameters if they are provided
  if (leavesTypeId) {
    params = params.append('LeavesTypeId', leavesTypeId.toString());
  }
  
  if (Name) {
    params = params.append('Name', Name);
  }
  if (pageNumber) {
    params = params.append('PageNumber', pageNumber.toString());
  }

  if (pageSize) {
    params = params.append('PageSize', pageSize.toString());
  }
  return this._HttpClient.get(this.url + "/UserLeave/GetAllByUserId", { params });
}
/* Department */
 getDepartments(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/Department/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
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
getEmployee(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/Employee/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
}
GetMyDataAndAllMyEmployee(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/Employee/GetMyDataAndAllMyEmployee?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
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
getEmployeeByCode(code: number) {
  return this._HttpClient.get(this.url + `/Employee/GetByCode/${code}`);
}
UpdateEmployee( body: any) {
  return this._HttpClient.post(this.url + `/Employee/Update`, body);
}
/* Public Holiday */
GetAllPublicHolidaysType(){
  return this._HttpClient.get(this.url + "/PublicHoliday/GetAllPublicHolidaysType");
}
getPublicHoliday(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/PublicHoliday/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
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
getWorkTime(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/WorkingTime/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
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

/* Time Table */
getAllTimeTable(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/TimeTableH/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
}
addTimeTable(body: any) {
  return this._HttpClient.post(this.url + "/TimeTableH/SaveAllTimeTableData", body);
}
deleteTimeTable(id: number) {
  return this._HttpClient.delete(this.url + `/TimeTableH/Delete/${id}`);
}
getTimeTableByID(id: number) {
  return this._HttpClient.get(this.url + `/TimeTableH/GetById/${id}`);
}
/* End Time Table */
/* Exception Work Time */
getExceptionWorkTime(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/ExceptionWorkingTime/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
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
 getJobs(pageNumber: any='', pageSize: any='',Name:string='') {
    return this._HttpClient.get(this.url + `/Job/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
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
 getLocations(pageNumber: any='', pageSize: any='',Name:string='') {

  return this._HttpClient.get(this.url + `/Location/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
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
 getShifts(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/Shift/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
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
getTransactions(leavesTypeId?: number, TransactionStatusId?: string,pageNumber: any='', pageSize: any='') {
  let params = new HttpParams();
  
  // Append parameters if they are provided
  if (leavesTypeId) {
    params = params.append('LeavesTypeId', leavesTypeId.toString());
  }
  
  if (TransactionStatusId) {
    params = params.append('TransactionStatusId', TransactionStatusId.toString());
  }
  if (pageNumber) {
    params = params.append('PageNumber', pageNumber.toString());
  }

  if (pageSize) {
    params = params.append('PageSize', pageSize.toString());
  }
  
  return this._HttpClient.get(this.url + "/Transaction/GetAll", { params });
}
GetAllMyTransactions(leavesTypeId?: number, TransactionStatusId?: string,pageNumber: any='', pageSize: any='') {
  let params = new HttpParams();
  
  // Append parameters if they are provided
  if (leavesTypeId) {
    params = params.append('LeavesTypeId', leavesTypeId.toString());
  }
  
  if (TransactionStatusId) {
    params = params.append('TransactionStatusId', TransactionStatusId.toString());
  }
  if (pageNumber) {
    params = params.append('PageNumber', pageNumber.toString());
  }

  if (pageSize) {
    params = params.append('PageSize', pageSize.toString());
  }
  
  return this._HttpClient.get(this.url + "/Transaction/GetAllMyTransactions", { params });
}

GetAllTransactionToMyEmployee(leavesTypeId?: any, TransactionStatusId?: any,pageNumber: any='', pageSize: any='') {
  let params = new HttpParams();
  
  // Append parameters if they are provided
  if (leavesTypeId) {
    params = params.append('LeavesTypeId', leavesTypeId.toString());
  }
  
  if (TransactionStatusId) {
    params = params.append('TransactionStatusId', TransactionStatusId.toString());
  }
  if (pageNumber) {
    params = params.append('PageNumber', pageNumber.toString());
  }

  if (pageSize) {
    params = params.append('PageSize', pageSize.toString());
  }
  
  return this._HttpClient.get(this.url + "/Transaction/GetAllTransactionToMyEmployee", { params });
}
//  getTransactions() {
//   return this._HttpClient.get(this.url + "/Transaction/GetAll");
// }
ChangeStatus(body: any) {
  return this._HttpClient.post(this.url + "/Transaction/ChangeStatus", body);
}
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
getLeaves(leavesTypeId?: any,pageNumber: any='', pageSize: any='',Name:string='') {
  let params = new HttpParams();
  
  // Append parameters if they are provided
  if (leavesTypeId) {
    params = params.append('LeavesTypeId', leavesTypeId.toString());
  }
  
  if (Name) {
    params = params.append('Name', Name);
  }
  if (pageNumber) {
    params = params.append('PageNumber', pageNumber.toString());
  }

  if (pageSize) {
    params = params.append('PageSize', pageSize.toString());
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
getUsers(pageNumber: any='', pageSize: any='',Name:string='') {
  return this._HttpClient.get(this.url + `/User/GetAll?Name=${Name}&pageNumber=${pageNumber}&pageSize=${pageSize}`)
}
getuserpermissionbyid(id: number) {
  return this._HttpClient.get(
    this.url + `/UserRole/GetUserSystemPageFull/${id}`
  );
}
CalcMonth(data: any) {
  return this._HttpClient.post(this.url + `/StoredProcedure/CalculateTotals`, data);
}
ChangePassword(data: any) {
  return this._HttpClient.post(this.url + `/User/ChangePassword`, data);
}
ResetPassword(UserID: any) {
  return this._HttpClient.post(this.url + `/User/ResetPassword`, UserID);
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
/* user */

getUsersWithPermissions() {
  return this._HttpClient.get(this.url + `/User/GetAllUserDataForCreate`);
}
addUserWithPermissions(body:any){
  return this._HttpClient.post(this.url + "/User/SaveAllUserData", body);
}
getUserById(id: number) {
  return this._HttpClient.get(this.url + `/User/GetAllUserDataById/${id}`);
}

/* reports */
getReports() {
  return this._HttpClient.get(this.url + "/Report/GetAll");
}















 


 
}
