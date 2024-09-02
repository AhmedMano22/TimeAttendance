import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  // theme layout settings
  public config = {
    settings: {
      sidebar: 'compact-wrapper',
      layout_version: 'light-only',
      sidebar_type: 'default-sidebar',
   },
   color: {
      primary_color: '#6362e7',
      secondary_color: '#FFC500',
      success_color: '#2a856c'
   }
  }

  public saveLayout() {
    localStorage.setItem('layout', this.config.settings.layout_version);
  }
 

  constructor() {
    const lang = localStorage.getItem('lang'); // Get the stored language from local storage
      if(lang) {
        let dir = 'ltr';
        if(lang == 'ar') dir = 'rtl';
        document.getElementsByTagName('html')[0].setAttribute('dir', dir);
        document.getElementsByTagName('html')[0].setAttribute('lang', lang);
      }
      else {
        localStorage.setItem('lang', 'ar');
        document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        document.getElementsByTagName('html')[0].setAttribute('lang', 'ar');
      }
      document.documentElement.style.setProperty('--theme-deafult', this.config.color.primary_color);
      document.documentElement.style.setProperty('--theme-secondary', this.config.color.secondary_color);
      document.documentElement.style.setProperty('--success-color', this.config.color.success_color);

      const layout = localStorage.getItem('layout');
      if(layout) {
        this.config.settings.layout_version = layout;
      }
      else {
        localStorage.setItem('layout', 'light-only');
      }
    }

}
