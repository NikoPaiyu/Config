import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../api.service';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  
  constructor(private apiService :ApiService) { }


}