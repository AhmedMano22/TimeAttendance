import { DecimalPipe } from '@angular/common';
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/shared/directive/sortable.directive';
import { Table } from 'src/app/shared/interface/table';
import { TablesService } from 'src/app/shared/services/tables/tables.service';

@Component({
  selector: 'app-basic-init',
  templateUrl: './basic-init.component.html',
  styleUrls: ['./basic-init.component.scss'],
  providers: [TablesService, DecimalPipe]
})
export class BasicInitComponent{
  basicTable$: Observable<Table[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader>;
  
  constructor(public service: TablesService) {
    this.basicTable$ = service.basicTable$;
    this.total$ = service.total$;
  }
  

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  deleteData(id: number){
    this.basicTable$.subscribe((data: any)=> {      
      data.map((elem: any,i: any)=>{elem.id == id && data.splice(i,1)})
      
    })
  }

}
