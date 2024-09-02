import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayEarningComponent } from './today-earning.component';

describe('TodayEarningComponent', () => {
  let component: TodayEarningComponent;,data: { animation: [routingAnimation]}
  let fixture: ComponentFixture<TodayEarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayEarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodayEarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
