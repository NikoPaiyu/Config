import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationservicesComponent } from './configurationservices.component';

describe('ConfigurationservicesComponent', () => {
  let component: ConfigurationservicesComponent;
  let fixture: ComponentFixture<ConfigurationservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
