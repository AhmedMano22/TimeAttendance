import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form-control',
  templateUrl: './basic-form-control.component.html',
  styleUrls: ['./basic-form-control.component.scss']
})
export class BasicFormControlComponent implements OnInit {
  selectedIds: string[];
  selectedName = 'Vilnius';
  selectedId: number;
  selectedNumberIds: number[];

  constructor() { }

  cities2 = [
    {id: 1, name: '1'},
    {id: 2, name: '2'},
    {id: 3, name: '3'},
    {id: 4, name: '4'},
    {id: 5, name: '5'}
];

  ngOnInit(): void {
  }

}
