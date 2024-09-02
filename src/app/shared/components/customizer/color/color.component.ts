import { Component, HostBinding, OnInit } from '@angular/core';
import { LayoutService } from 'src/app/shared/services/layout/layout.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {
  public MIXLayout: string = 'light-only';

  constructor(public layout:LayoutService) {
  }

  ngOnInit(): void {
  }


  customizeMixLayout(val: any) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
    this.layout.saveLayout();
  }
}
