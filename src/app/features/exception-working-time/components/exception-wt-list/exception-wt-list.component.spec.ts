import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExceptionWTListComponent } from './exception-wt-list.component';

describe('ExceptionWTListComponent', () => {
  let component: ExceptionWTListComponent;
  let fixture: ComponentFixture<ExceptionWTListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExceptionWTListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExceptionWTListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
