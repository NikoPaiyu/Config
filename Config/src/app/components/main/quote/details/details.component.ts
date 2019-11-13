import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }

}
