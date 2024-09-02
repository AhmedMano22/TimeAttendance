import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss']
})
export class DropzoneComponent implements OnInit {
  files: File[] = [];
  files2: File[] = [];
  files3: File[] = [];
  
  onSelect(event: any) {
    if(this.files && this.files.length >=1) {
      this.onRemove(this.files[0]);
    }
    this.files.push(...event.addedFiles);
  }
  onSelect2(event: any) {
    this.files2.push(...event.addedFiles);
  }
  onSelect3(event: any) {
    this.files3.push(...event.addedFiles);
  }
  onRemove(event: any){
    this.files.splice(this.files.indexOf(event), 1);
  }
  onRemove2(event: any){
    this.files2.splice(this.files2.indexOf(event), 1);
  }
  onRemove3(event: any){
    this.files3.splice(this.files3.indexOf(event), 1);
  }
  constructor() { }

  ngOnInit(): void {
  }
}
