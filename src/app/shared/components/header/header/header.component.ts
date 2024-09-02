import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { EyasNavService } from 'src/app/shared/services/eyas-nav.service';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public dark: boolean = this.layout.config.settings.layout_version == 'dark-only' ? true : false;

  collapseSidebar: boolean = true;

  constructor(private eyasNavService:EyasNavService, public layout: LayoutService,
    public translate: TranslateService, private renderer: Renderer2) {}

  sidebarToggle( ) {
    this.eyasNavService.collapseSidebar = !this.eyasNavService.collapseSidebar;
  }

  layoutToggle() {
    this.dark = !this.dark;
    this.layout.config.settings.layout_version = this.dark ? 'dark-only' : 'light-only';
    localStorage.setItem('layout', this.layout.config.settings.layout_version);
  }

  searchToggle(){
    this.eyasNavService.search = true;
  }

  ngOnInit(): void {
    
  }

  switchLanguage() {
    if (this.translate.currentLang === 'en') {
      this.translate.use('ar');
      this.translate.setDefaultLang('ar');
      this.renderer.setAttribute(document.documentElement, 'lang', 'ar');
      this.renderer.setAttribute(document.documentElement, 'dir', 'rtl');
      localStorage.setItem('lang', 'ar');
    } else {
      this.translate.use('en');
      this.translate.setDefaultLang('en');
      this.renderer.setAttribute(document.documentElement, 'lang', 'en');
      this.renderer.setAttribute(document.documentElement, 'dir', 'ltr');
      localStorage.setItem('lang', 'en');
    }
  }
  
}
