import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeploymentservicesComponent } from './deploymentservices.component';

describe('DeploymentservicesComponent', () => {
  let component: DeploymentservicesComponent;
  let fixture: ComponentFixture<DeploymentservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeploymentservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeploymentservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
