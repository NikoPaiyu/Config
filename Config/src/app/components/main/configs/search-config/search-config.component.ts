import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-search-config',
  templateUrl: './search-config.component.html',
  styleUrls: ['./search-config.component.scss']
})
export class SearchConfigComponent implements OnInit {

  constructor() {}

  radioButtonsArr = [{
      name: 'None'
    },
    {
      name: 'Config Id'
    },
    {
      name: 'Config Name'
    },
    {
      name: 'Created By Email'
    },
    {
      name: 'CustomerID ( MDCP ID)'
    }
  ];

  ngOnInit() {}

}
