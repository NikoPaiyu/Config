import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})



export class OutputComponent implements OnInit {

  constructor(private http: HttpClient) { }

  url = 'https://localhost:44369';
 data;

  outputType = [
  {
    'typeName' : 'pdf'
  },
    {
    'typeName' : 'excel'  
  }
  ]


  ngOnInit() {
    this.displaySomething();
  }


  displaySomething(){
    this.http.get<any[]>(this.url + '/api/quoteoutput').subscribe(res => {
     this.data = res[0];
    },err => {
      console.log(err);
    })
  }

}



