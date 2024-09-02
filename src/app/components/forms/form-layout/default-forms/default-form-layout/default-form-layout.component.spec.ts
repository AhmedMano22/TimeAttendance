import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultFormLayoutComponent } from './default-form-layout.component';

describe('DefaultFormLayoutComponent', () => {
  let component: DefaultFormLayoutComponent;,data: { animation: [routingAnimation]}
  let fixture: ComponentFixture<DefaultFormLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultFormLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultFormLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
