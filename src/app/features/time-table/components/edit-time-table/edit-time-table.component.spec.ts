import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimeTableComponent } from './edit-time-table.component';

describe('EditTimeTableComponent', () => {
  let component: EditTimeTableComponent;
  let fixture: ComponentFixture<EditTimeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTimeTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTimeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
