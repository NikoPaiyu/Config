import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingandtermsComponent } from './pricingandterms.component';

describe('PricingandtermsComponent', () => {
  let component: PricingandtermsComponent;
  let fixture: ComponentFixture<PricingandtermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricingandtermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingandtermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
