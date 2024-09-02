import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscoverComponent } from './add-discover.component';

describe('AddDiscoverComponent', () => {
  let component: AddDiscoverComponent;
  let fixture: ComponentFixture<AddDiscoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDiscoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
