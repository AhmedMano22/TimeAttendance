import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.scss']
})
export class EmailComposeComponent implements OnInit {
  files: File[] = [];
  
  // data
  public ClassicEditor = ClassicEditor;

  constructor() { }
  
  // add file
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {
  }

}
