import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import * as feather from 'feather-icons';
import { slider } from 'src/app/shared/data/animation/route-animations';
import { EyasNavService } from 'src/app/shared/services/eyas-nav.service';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-manager-transaction',
  templateUrl: './manager-transaction.component.html',
  styleUrls: ['./manager-transaction.component.scss'],
  animations: [slider]
})
export class ManagerTransactionComponent {
  footerDark: boolean;
  footerLight: boolean;
  footerFix: boolean;
  Scorlled: boolean;
  public show: boolean = true;
  public width = window.innerWidth;
  public screenwidth: any = window.innerWidth;

  constructor(
    public eyasNavService: EyasNavService,
    public layout: LayoutService,
    public route: ActivatedRoute
  ) {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenwidth = event.target.innerWidth;

    if (this.screenwidth < 991) {
      return this.layout.config.settings.sidebar = "compact-wrapper"
    } else {
      return this.layout.config.settings.sidebar = this.layout.config.settings.sidebar || "horizontal-wrapper"
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
  }

  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
  ngOnInit(): void { }

  ngDoCheck() {
    if (window.location.pathname == '/page-layout/footer-dark') {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
      this.Scorlled = false;
    } else if (window.location.pathname == '/page-layout/footer-light') {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
      this.Scorlled = false;
    } else if (window.location.pathname == '/page-layout/footer-fixed') {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
      this.Scorlled = false;
    } else if (window.location.pathname == '/page-layout/hide-nav-scroll') {
      this.Scorlled = true;
      this.footerFix = false;
      this.footerLight = false;
      this.footerDark = false;
    }
  }

  @HostListener('window:scroll', [])
  scrollHandler() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (window.location.pathname == '/page-layout/hide-nav-scroll') {
      if (number > 600) {
        this.show = true;
      } else if (number === 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}

