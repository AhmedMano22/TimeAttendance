import { Component, ContentChild, TemplateRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-crud-list',
  templateUrl: './crud-list.component.html',
  styleUrls: ['./crud-list.component.scss']
})
export class CrudListComponent implements OnInit {
  
  @ContentChild('headers') headers: TemplateRef<any> | undefined;
  @ContentChild('rows') rows: TemplateRef<any> | undefined;
  @Input() data!: any[];
  
  ngOnInit(): void {

  }

  isString(value: any): value is string {
    return typeof value === 'string';
  }
  
  isImage(value: string | any): boolean {
    if (!this.isString(value)) {
      return false;
    }
    return /src|img|url/.test(value.toLowerCase());
  }
  
}
