import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ApiService } from '../../../../../api.service';

@Component({
  selector: 'app-pricingandterms',
  templateUrl: './pricingandterms.component.html',
  styleUrls: ['./pricingandterms.component.scss']
})
export class PricingandtermsComponent implements OnInit {
response = [];
 //constructor(private apiService :ApiService) { }
constructor(private http: HttpClient) { }

  url = 'https://localhost:44344';


  ngOnInit() {
    this.displaySomething();
  } 


  displaySomething(){
    this.http.get<any[]>(this.url + '/api/pricing').subscribe(res => {
    this.response=res;
     

    },err => {
      console.log(err);
    })
  }

}