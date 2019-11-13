import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryConfigResultComponent } from './search-category-config-result.component';

describe('SearchCategoryConfigResultComponent', () => {
  let component: SearchCategoryConfigResultComponent;
  let fixture: ComponentFixture<SearchCategoryConfigResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCategoryConfigResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCategoryConfigResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
