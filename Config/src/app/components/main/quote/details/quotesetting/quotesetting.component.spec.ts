import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesettingComponent } from './quotesetting.component';

describe('QuotesettingComponent', () => {
  let component: QuotesettingComponent;
  let fixture: ComponentFixture<QuotesettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
