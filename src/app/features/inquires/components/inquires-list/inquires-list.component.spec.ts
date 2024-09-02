import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiresListComponent } from './inquires-list.component';

describe('InquiresListComponent', () => {
  let component: InquiresListComponent;
  let fixture: ComponentFixture<InquiresListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquiresListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
