import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { allIcon } from 'src/app/shared/data/icon/thimify';
  import * as iconData from '../../../shared/data/icon/ico'
@Component({
  selector: 'app-ico-icon',
  templateUrl: './ico-icon.component.html',
  styleUrls: ['./ico-icon.component.scss']
})
export class IcoIconComponent implements OnInit {
  public detail: boolean = false;
  public icon: string;
  public val: string;

  public allIconData = allIcon.ico
  
  constructor(public toastrService : ToastrService) { }

    toggleWithInfo(icon: string) {
      this.detail = true;
      this.icon = icon;
      this.val = '<i class="icofont icofont-' + icon + '"></i>';
    }

    // copy text
    copyText(val: string) {
      let selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = '<i class="icofont icofont-' + val + '"></i>';
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);
      this.toastrService.show('<p class="mb-0 mt-1">Code Copied to clipboard</p>', '', { closeButton: true, enableHtml: true, positionClass: 'toast-bottom-right' });

    }
  ngOnInit(): void {
  }

}
