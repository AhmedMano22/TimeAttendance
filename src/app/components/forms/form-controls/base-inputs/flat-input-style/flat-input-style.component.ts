import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flat-input-style',
  templateUrl: './flat-input-style.component.html',
  styleUrls: ['./flat-input-style.component.scss']
})
export class FlatInputStyleComponent implements OnInit {
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
