import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverDetailsComponent } from './discover-details.component';

describe('DiscoverDetailsComponent', () => {
  let component: DiscoverDetailsComponent;
  let fixture: ComponentFixture<DiscoverDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
