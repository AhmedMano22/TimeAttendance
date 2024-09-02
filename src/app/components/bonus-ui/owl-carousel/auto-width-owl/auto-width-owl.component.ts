import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";

@Component({
  selector: "app-auto-width-owl",
  templateUrl: "./auto-width-owl.component.html",
  styleUrls: ["./auto-width-owl.component.scss"],
})
export class AutoWidthOwlComponent implements OnInit {
  public owlcarousel5ptions = data?.owlcarousel5ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}
