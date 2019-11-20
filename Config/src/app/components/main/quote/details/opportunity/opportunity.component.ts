import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../../api.service';


@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.scss']
})
export class OpportunityComponent implements OnInit {

  carMappings = {
    tyt: "Toyota",
    frd: "Ford",
    prs: "Porsche",
    nss: "Nissan"
};
  columnDefs = [
    {headerName: 'Line#', field: 'line',checkboxSelection:true},
    {headerName: 'Qty', field: 'qty',editable:true},
    {headerName: 'Part Number', field: 'partnumber'},
    {headerName: 'Description', field: 'description'},
    {headerName: 'List Price', field: 'listprice',sortable:true},
    {headerName: 'Std Discount%', field: 'stddiscount'},
    {headerName: 'Std Net Price', field: 'stdnetprice'},
    {headerName: 'Rest Discount', field: 'restdiscount',editable:true},
    {
      headerName: "Rest Type",
      field: "resttype",
      cellEditor: "select",
      cellEditorParams: {
         values: extractValues(this.carMappings)
      },
      filter: "agSetColumnFilter",
      refData: this.carMappings // just required to specify refData!
  },
  {headerName: 'Reqt Net', field: 'reqtnet'},
];

rowData = [
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"tyt",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"frd",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"prs",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"nss",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"tyt",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"frd",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"prs",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"nss",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"tyt",reqtnet:1212.61 },
    { line: 1.0, qty:0.0,partnumber: '1PV88A',description:'HP Laser Jet Enterprise M507x',listprice:'1,212,61,',stddiscount:0.00,stdnetprice:'1,212,61',restdiscount:0.0,resttype:"frd",reqtnet:1212.61 },
];

//modules = AllCommunityModules;
  ngOnInit(): void {
    throw new Error("Method not implemented.");
    
  }


  
  constructor(private apiService :ApiService) { }




}


function extractValues(mappings) {
  return Object.keys(mappings);
}
function lookupValue(mappings, key) {
  return mappings[key];
}
function lookupKey(mappings, name) {
  for (var key in mappings) {
    if (mappings.hasOwnProperty(key)) {
      if (name === mappings[key]) {
        return key;
      }
    }
  }
}