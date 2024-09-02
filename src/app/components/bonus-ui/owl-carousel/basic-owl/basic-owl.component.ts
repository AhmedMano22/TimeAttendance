import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";

@Component({
  selector: "app-basic-owl",
  templateUrl: "./basic-owl.component.html",
  styleUrls: ["./basic-owl.component.scss"],
})
export class BasicOwlComponent implements OnInit {
  public owlcarousel1ptions = data?.owlcarousel1ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}
