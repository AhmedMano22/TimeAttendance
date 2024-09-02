import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsListDetailsComponent } from './bookings-list-details.component';

describe('BookingsListDetailsComponent', () => {
  let component: BookingsListDetailsComponent;
  let fixture: ComponentFixture<BookingsListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingsListDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
