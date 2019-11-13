import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../api.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {

  constructor(private apiService :ApiService) { }

  ngOnInit() {
    this.apiService.getCustomerById().subscribe(data => {
      console.log(data);
     })  
  }

}
