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
    // {
    //   title: "UNITS",
    //   icon: "bookmark",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/units/units", title: "UNITS_LIST", type: "link" },
    //     { path: "/units/add-unit", title: "ADD_UNIT", type: "link" },
    //     { path: "/units/Pending-Units", title: "PENDING_UNITS", type: "link" },
    //   ],
    // },

    // {
    //   title: "OWNERS",
    //   icon: "users",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/users/Owners", title: "OWNERS_LIST", type: "link" },

    //   ],
    // },
    // {
    //   title: "PENDING_OWNERS",
    //   icon: "users",
    //   type: "link",
    //   active: false,
    //   path: "/users/Pending-Owners",
    // },
    // {
    //   title: "DISCOVER",
    //   icon: "page",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     {
    //       path: "/discover/discover-list",
    //       title: "DISCOVERS_LIST",
    //       type: "link",
    //     },
    //     { path: "/discover/add", title: "ADD_DISCOVER", type: "link" },
    //   ],
    // },
    // {
    //   title: "ADS",
    //   icon: "page",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/ads/ads-list", title: "ADS_LIST", type: "link" },
    //     { path: "/ads/add", title: "ADD_ANNOUNCEMENT", type: "link" },
    //   ],
    // },
    // {
    //   title: "SERVICES",
    //   icon: "widgets",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/services/services", title: "SERVICES", type: "link" },
    //     { path: "/services/add-service", title: "ADD_SERVICE", type: "link" },

    //     {
    //       path: "/services/bookings-List",
    //       title: "BOOKINGS_LIST",
    //       type: "link",
    //     },
    //     { path: "/services/add-bookings", title: "ADD_BOOKINGS", type: "link" },
    //   ],
    // },
    // {
    //   title: "ORDERS",
    //   icon: "widgets",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     { path: "/requests/requests-list", title: "ORDERS_LIST", type: "link" },

    //     { path: "/requests/add", title: "ADD_ORDERS", type: "link" },
    //   ],
    // },

    // {
    //   title: "PENDING_BOOKINGS",
    //   icon: "widgets",
    //   type: "link",
    //   active: false,
    //   path: "/services/pending-services",
    // },
    // {
    //   title: "PENDING_ORDERS",
    //   icon: "widgets",
    //   type: "link",
    //   active: false,
    //   path: "/requests/pending-requests",
    // },
    // {
    //   title: "DEPARTMENTS",
    //   icon: "widgets",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     {
    //       path: "/departments/departments-list",
    //       title: "DEPARTMENTS_LIST",
    //       type: "link",
    //     },
    //     { path: "/departments/add", title: "ADD_DEPARTMENT", type: "link" },
    //   ],
    // },
    // {
    //   title: "INQUIRES",
    //   icon: "others",
    //   type: "link",
    //   active: false,
    //   path: "/inquires/inquires-list",
    // },

    {
      title: "ACCOUNTS_RULES",
      icon: "users",
      type: "sub",
      active: false,
      children: [
        { path: "/users/users-list", title: "USERS_LIST", type: "link" },
      ],
    },
    // {
    //   title: "CONTACT_US",
    //   icon: "knowledgebase",
    //   type: "link",
    //   active: false,
    //   path: "/contact/contact-us",
    // },
    // {
    //   title: "REPORTSS",
    //   icon: "charts",
    //   type: "link",
    //   active: false,
    //   path: "/reports/reports-list",
    // },

    // {
    //   title: "SETTINGS",
    //   icon: "samplepage",
    //   type: "sub",
    //   active: false,
    //   children: [
    //     {
    //       path: "/setting/change-password",
    //       title: "CHANGE_PASS",
    //       type: "link",
    //     },
    //   ],
    // },
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}
