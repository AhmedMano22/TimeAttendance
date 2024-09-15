import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionWorkingTimeComponent } from './exception-working-time.component';

describe('ExceptionWorkingTimeComponent', () => {
  let component: ExceptionWorkingTimeComponent;
  let fixture: ComponentFixture<ExceptionWorkingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionWorkingTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExceptionWorkingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
