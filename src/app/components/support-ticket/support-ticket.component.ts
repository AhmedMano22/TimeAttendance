import {DecimalPipe} from '@angular/common';
import {Component, QueryList, ViewChildren, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import { supportDB } from 'src/app/shared/data/support-ticket/support-ticket';
import { NgbdSortableHeader2, SortEvent } from 'src/app/shared/directive/sor-table.directive';
import { SupportTicketService } from 'src/app/shared/services/support-ticket/support-ticket.service';
import * as data from '../../shared/data/support-ticket/support-ticket'
@Component({
  selector: 'app-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SupportTicketComponent {
  countries$: Observable<supportDB[]>;
  total$: Observable<number>;

  public ticketListStatus = data.ticketListStatus 

  @ViewChildren(NgbdSortableHeader2) headers: QueryList<NgbdSortableHeader2>;

  constructor(public service: SupportTicketService) {
    this.countries$ = service.support$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  deleteTicket(id: number){
    this.countries$.subscribe((data: any)=> {      
      data.map((elem: any,i: any)=>{elem.id == id && data.splice(i,1)})
      
    })
  }
}

