import * as data from "../../../../shared/data/owl";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lazy-load-owl",
  templateUrl: "./lazy-load-owl.component.html",
  styleUrls: ["./lazy-load-owl.component.scss"],
})
export class LazyLoadOwlComponent implements OnInit {
  public owlcarousel10ptions = data?.owlcarousel10ptions;
  public owlcarousel1 = data?.owlcarousel1;

  constructor() {}

  ngOnInit(): void {}
}
