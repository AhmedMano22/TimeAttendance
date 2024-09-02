import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";

@Component({
  selector: "app-right-to-left-owl",
  templateUrl: "./right-to-left-owl.component.html",
  styleUrls: ["./right-to-left-owl.component.scss"],
})
export class RightToLeftOwlComponent implements OnInit {
  public owlcarousel9ptions = data?.owlcarousel9ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}
