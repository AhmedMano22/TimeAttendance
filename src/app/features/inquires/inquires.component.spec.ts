import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiresComponent } from './inquires.component';

describe('InquiresComponent', () => {
  let component: InquiresComponent;
  let fixture: ComponentFixture<InquiresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
