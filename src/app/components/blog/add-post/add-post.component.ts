import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  selectedCity: any;
  selectedCityIds: string[];
  selectedCityName = 'Vilnius';
  selectedCityId: number;
  selectedUserIds: number[];
  
  files: File[] = []
  public category = [{ id:1, name: "Life Style" },{ id:2, name: "Travel" }];
  public selectedCategory: string[] = [];

  public ClassicEditor = ClassicEditor;
  public config = {
    name: 'document', groups: [ 'mode', 'document', 'doctools' ]
};

cities2 = [
  {id: 1, name: 'Vilnius'},
  {id: 2, name: 'Kaunas'},
  {id: 3, name: 'Pavilnys', disabled: true},
  {id: 4, name: 'Pabradė'},
  {id: 5, name: 'Klaipėda'}
];
  cities4: { id: number; name: string; }[];

  constructor() {
    this.create10kCities();
  }  
  
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {
  }
  addCustomUser = (term: any) => ({id: term, name: term});
  private create10kCities() {
      this.cities4 = Array.from({length: 10000}, (value, key) => key)
    .map(val => ({
      id: val,
      name: `city ${val}`
    }));
  }
}
