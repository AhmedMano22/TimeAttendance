import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-ck-editors',
  templateUrl: './ck-editors.component.html',
  styleUrls: ['./ck-editors.component.scss']
})
export class CkEditorsComponent implements OnInit {
  editor = ClassicEditor;
  data: any = `<p>Command Module with a cabin for the three astronauts which was the only part which landed back on Earth
  Service Module which supported the Command Module with propulsion, electrical power, oxygen and watersdsd
  Lunar Module for landing on the Moon.</p>`;
  
  config = {
    toolbar: [
      
      'undo',
      'redo',
      '|',
      'heading',
      'fontFamily',
      'fontSize',
      '|',
      'bold',
      'italic',
      'underline',
      'fontColor',
      'fontBackgroundColor',
      'highlight',
      '|',
      'link',
      'CKFinder',
      'imageUpload',
      'mediaEmbed',
      '|',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'insertTable',
      'blockQuote',
      'specialCharacters'
    ],
    language: 'id',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
  }

  
  public htmlContent = '';
  
  constructor() { }

  ngOnInit() { }
  
  

}
