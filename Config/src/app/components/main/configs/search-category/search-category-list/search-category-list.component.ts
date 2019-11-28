import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-category-list',
  templateUrl: './search-category-list.component.html',
  styleUrls: ['./search-category-list.component.scss']
})
export class SearchCategoryListComponent implements OnInit {

  categoryList = [
    {
      name : 'Business Desktop PC',
     
    },
    {
      name : 'Business Laptop PC',

    },
    {
      name : 'Mobile Workstation',

    },
    {
      name : 'Point of Sales',
    
    },
    {
       name : 'Workstations',
       icon : ''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
