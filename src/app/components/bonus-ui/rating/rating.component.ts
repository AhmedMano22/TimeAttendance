import { Component, OnInit } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar, faStarHalfAlt, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {
  squareRate = 3;
  squareRate2 = 2;
  cssRate = 2.6;
  faRate = 4;
  movieRate = 0;
  verticalRate = 5;
  fontAwesomeRate = 3.5;
  ctrl = new FormControl<number | null>(null, Validators.required);

  faoRate = 5.6;
  faoRated = false;

  onFaoRate(e: any) {
    this.faoRated = true;
    this.faoRate = e;
  }

  faoReset() {
    this.faoRated = false;
    this.faoRate = 5.6;
  }

  constructor(library: FaIconLibrary) { 
    library.addIcons(faStar, faStarHalfAlt, farStar, faTimesCircle);
  }

  ngOnInit(): void {
  }


}
