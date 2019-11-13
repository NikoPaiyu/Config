import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryListComponent } from './search-category-list.component';

describe('SearchCategoryListComponent', () => {
  let component: SearchCategoryListComponent;
  let fixture: ComponentFixture<SearchCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
