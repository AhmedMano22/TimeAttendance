import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss']
})
export class ReportDetailsComponent implements OnInit{

  constructor(private route:ActivatedRoute) {}

  id: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  report = {
    reporterName: "علي الفهد",
    reportedPersonName: "محمود السعيدي",
    reportedPersonImage: "https://media.istockphoto.com/id/625715918/photo/attractive-arabian-business-man-standing-over-a-white-background.jpg?s=1024x1024&w=is&k=20&c=VAN2qpXVZomzcbh5aGWgUPaTc78V_m8LU9oP07JI2Ek=",
    legalServiceNumber: 12345,
    reportType: "بلاغ ب2",
    reportDescription: "تعليق البلاغ",
    reportStatus: "لم يتم الرد",
    reportDate: new Date("2023-07-31T00:00:00.000Z"),
  };

}
