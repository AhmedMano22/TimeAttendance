import { Component } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent {

  supervisor = {
    picture: "https://media.istockphoto.com/id/513420149/photo/arabian-businessman-using-laptop-in-his-office.jpg?s=612x612&w=0&k=20&c=Ou_WZmq5cKLoCGIUCnOXxwSgasufW2FTvDBKpHVQNLQ=",
    fullName: "أحمـد السعـود",
    phoneNumber: "+966 55 123 4567",
    country: "المملكة العربية السعودية",
    email: "ahmed.alsaud@example.com",
    gender: "ذكر",
    type: "أدمن",
    permission: "مدير"
  };

}
