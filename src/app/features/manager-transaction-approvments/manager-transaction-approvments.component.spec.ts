import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTransactionApprovmentsComponent } from './manager-transaction-approvments.component';

describe('ManagerTransactionApprovmentsComponent', () => {
  let component: ManagerTransactionApprovmentsComponent;
  let fixture: ComponentFixture<ManagerTransactionApprovmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerTransactionApprovmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerTransactionApprovmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
