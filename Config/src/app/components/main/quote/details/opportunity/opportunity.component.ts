import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../api.service';
import {AllCommunityModules} from '@ag-grid-community/all-modules';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {
  months :any 
  constructor(private apiService :ApiService) { }
  columnDefs = [
    {headerName: 'Line#', field: 'line',checkboxSelection:true},
    {headerName: 'Qty', field: 'qty',editable:true},
    {headerName: 'Part Number', field: 'partnumber'},
    {headerName: 'Description', field: 'description'},
    {headerName: 'List Price', field: 'listprice',sortable:true},
    {headerName: 'Std Discount%', field: 'stddiscount'},
    {headerName: 'Std Net Price', field: 'stdnetprice'},
    {headerName: 'Rest Discount', field: 'restdiscount',editable:true},
    {headerName: 'Rest Type', field: 'resttype'},
    {headerName: 'Reqt Net', field: 'reqtnet',sortable: true},
];

rowData = [
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:'%',reqtnet:1212.61 },
];

modules = AllCommunityModules;

  ngOnInit() {
    this.apiService.getCustomerById().subscribe(data => {
      console.log(data);
     })  
  }

}
