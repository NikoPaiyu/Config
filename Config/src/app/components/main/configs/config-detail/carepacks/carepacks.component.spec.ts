import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarepacksComponent } from './carepacks.component';

describe('CarepacksComponent', () => {
  let component: CarepacksComponent;
  let fixture: ComponentFixture<CarepacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarepacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarepacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
