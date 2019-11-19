import { Component, OnInit } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  response : any;

  constructor(private http: HttpClient) { }

  url='https://localhost:44300';
  ngOnInit() {
    this.displaySomething();
  }

  displaySomething(){
    this.http.get(this.url+ '/api/customers').subscribe(res=> {
      this.response = res;
      console.log(res);
    })
  }

}
