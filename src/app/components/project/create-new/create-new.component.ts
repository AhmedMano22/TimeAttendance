import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-create-new",
  templateUrl: "./create-new.component.html",
  styleUrls: ["./create-new.component.scss"],
})
export class CreateNewComponent implements OnInit {
  files: File[] = [];

  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  constructor() {}
  ngOnInit(): void {}
}
