import { Component } from '@angular/core';

@Component({
  selector: 'app-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss']
})
export class ReportsListComponent {

  status = [
    'REPLIED',
    'NOT_REPLIED',
    'CLOSED'
  ]

  selectedStatus = '';

  reports = [
    {
      id: 1,
      reporterName: 'أحمد محمد',
      reportedName: 'جمال خالد',
      reportStatus: 'REPLIED'
    },
    {
      id: 2,
      reporterName: 'علي عبدالله',
      reportedName: 'سعيد عمر',
      reportStatus: 'NOT_REPLIED'
    },
    {
      id: 3,
      reporterName: 'خالد عبدالرحمن',
      reportedName: 'عبدالعزيز فهد',
      reportStatus: 'CLOSED'
    },
    {
      id: 4,
      reporterName: 'حسن محمود',
      reportedName: 'عبدالله علي',
      reportStatus: 'NOT_REPLIED'
    },
    {
      id: 5,
      reporterName: 'محمد سعود',
      reportedName: 'عبدالرحمن ناصر',
      reportStatus: 'REPLIED'
    },
    {
      id: 6,
      reporterName: 'سلطان محمد',
      reportedName: 'عبدالله خالد',
      reportStatus: 'NOT_REPLIED'
    },
    {
      id: 7,
      reporterName: 'فارس علي',
      reportedName: 'محمد عبدالرحمن',
      reportStatus: 'REPLIED'
    },
    {
      id: 8,
      reporterName: 'يوسف أحمد',
      reportedName: 'عبدالعزيز علي',
      reportStatus: 'CLOSED'
    },
  ];

}
