import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carepacks',
  templateUrl: './carepacks.component.html',
  styleUrls: ['./carepacks.component.scss']
})
export class CarepacksComponent implements OnInit {

  recommendedCare = [
    {
      number: '1',
      partnumber: 'UB3G4E',
      description: 'HP 4 year NBD Onsite Hardware Support w/Battery Replacement Notebook(X1)H',
    },
    {
      number: '2',
      partnumber: 'UB0E9E',
      description: 'HP 5 year Next Business Day Onsite Hardware Support w/DMR for HP Notebooks',
    },
  ]
  
  additionalCare = [
    {
      number: '1',
      partnumber: 'UB0CGE',
      description: 'HP 1 year Return to Depot Hardware Support w/ADP-G2 for HP Notebooks',
    },
    {
      number: '2',
      partnumber: 'UB0E0E',
      description: 'HP 3 year Next Business Day Onsite Hardware Support HP Notebooks',
    },
    {
      number: '3',
      partnumber: 'UB0E1E',
      description: 'HP 4 year Next Business Day Onsite Hardware Support HP Notebooks',
    },
    {
      number: '4',
      partnumber: 'UB0E2E',
      description: 'HP 5 year Next Business Day Onsite Hardware Support HP Notebooks',
    },
    {
      number: '5',
      partnumber: 'UB0E4E',
      description: 'HP 3 year Next Business Day Onsite Hardware Support w/ADP-G2 for HP Notebooks',
    },
    {
      number: '6',
      partnumber: 'UB0E5E',
      description: 'HP 4 year Next Business Day Onsite Hardware Support w/ADP-G2 for HP Notebooks	',
    },
    {
      number: '7',
      partnumber: 'UB0EGE	',
      description: 'HP 5 year Next Business Day Onsite Hardware Support w/ADP-G2 for HP Notebooks',
    },
    {
      number: '8',
      partnumber: 'UB0E7E',
      description: 'HP 3 year Next Business Day Onsite Hardware Support w/DMR for HP Notebooks',
    },
    {
      number: '9',
      partnumber: 'UB0E8E',
      description: 'HP 4 year Next Business Day Onsite Hardware Support w/DMR for HP Notebooks',
    },
    {
      number: '10',
      partnumber: 'UB0F0E',
      description: 'HP 3 year NBD Onsite Hardware Support w/ADP-G2/DMR for HP Notebooks',
    },
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
