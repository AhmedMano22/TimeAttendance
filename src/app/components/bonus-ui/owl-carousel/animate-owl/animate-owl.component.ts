import { Component, OnInit } from "@angular/core";
import * as data from "../../../../shared/data/owl";

@Component({
  selector: "app-animate-owl",
  templateUrl: "./animate-owl.component.html",
  styleUrls: ["./animate-owl.component.scss"],
})
export class AnimateOwlComponent implements OnInit {
  public owlcarousel11ptions = data?.owlcarousel11ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}
