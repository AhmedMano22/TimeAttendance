import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingUnitsComponent } from './pending-units.component';

describe('PendingUnitsComponent', () => {
  let component: PendingUnitsComponent;
  let fixture: ComponentFixture<PendingUnitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingUnitsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingUnitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
