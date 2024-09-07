import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, fromEvent, Subject } from "rxjs";
import { takeUntil, debounceTime } from "rxjs/operators";

export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}
@Injectable({
  providedIn: "root",
})
export class EyasNavService {
  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(
    window.innerWidth
  );

  // Search Box
  public search: boolean = false;

  // Collapse Sidebar
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  // For Horizontal Layout Mobile
  public horizontal: boolean = window.innerWidth < 991 ? false : true;

  // Full screen
  public fullScreen: boolean = false;

  constructor(private router: Router) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, "resize")
      .pipe(debounceTime(1000), takeUntil(this.unsubscriber))
      .subscribe((evt: any) => {
        this.setScreenWidth(evt.target.innerWidth);
        if (evt.target.innerWidth < 991) {
          this.collapseSidebar = true;
        }
        if (evt.target.innerWidth < 1199) {
        }
      });
    if (window.innerWidth < 991) {
      // Detect Route change sidebar close
      this.router.events.subscribe((event) => {
        this.collapseSidebar = true;
      });
    }
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  MENUITEMS: Menu[] = [
    {
      title: "DASHBOARD",
      icon: "home",
      path: "/dashboard",
      type: "link",
      badgeType: "light-primary",
      active: true,
    },
 

    {
      title: "EMPLOYEE",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/employee/employee-list",
          title: "EMPLOYEE_LIST",
          type: "link",
        },
      ],
    },
    
    
    {
      title: "RegisterLeaves",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/departments/departments-list",
          title: "Vac_LIST",
          type: "link",
        },
        {
          path: "/departments/departments-list",
          title: "Mis_LIST",
          type: "link",
        },
        {
          path: "/departments/departments-list",
          title: "Per_LIST",
          type: "link",
        },
      ],
    },

    {
      title: "PUBLICHOLIDAY",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/Public/Public-list",
          title: "PUBLICHOLIDAY_LIST",
          type: "link",
        },
      ],
    },
    {
      title: "DEPARTMENTS",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/departments/departments-list",
          title: "DEPARTMENTS_LIST",
          type: "link",
        },
      ],
    },
    {
      title: "JOBS",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/Jobs/jobs-list",
          title: "JOBS_LIST",
          type: "link",
        },
      ],
    },
    {
      title: "LOCATION",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/Loccation/locations-list",
          title: "LOCATION_LIST",
          type: "link",
        },
      ],
    },
    {
      title: "SHIFTS",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/Shifts/shifts-list",
          title: "SHIFTS_LIST",
          type: "link",
        },
      ],
    },
    {
      title: "WORKTIME",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/Shifts/shifts-list",
          title: "WORKTIME_LIST",
          type: "link",
        },
      ],
    },
    {
      title: "TIMETABLE",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/Shifts/shifts-list",
          title: "TIMETABLE_LIST",
          type: "link",
        },
      ],
    },
    {
      title: "LEAVES",
      icon: "widgets",
      type: "sub",
      active: false,
      children: [
        {
          path: "/Leaves/Leaves-list",
          title: "LEAVES_LIST",
          type: "link",
        },
      ],
    },
     {
      title: "REPORTS",
      icon: "charts",
      type: "link",
      active: false,
      path: "/reports/reports-list",
    },

    {
      title: "ACCOUNTS_RULES",
      icon: "users",
      type: "sub",
      active: false,
      children: [
        { path: "/users/users-list", title: "USERS_LIST", type: "link" },
      ],
    },
  
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
