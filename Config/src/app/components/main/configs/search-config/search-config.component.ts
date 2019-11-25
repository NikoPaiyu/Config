import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HostListener } from '@angular/core'
import { ApiService } from 'src/app/api.service';
import { ConfigSearch } from 'src/app/core/models/config/configSearch.model';


@Component({
  selector: 'app-search-config',
  templateUrl: './search-config.component.html',
  styleUrls: ['./search-config.component.scss']
})
export class SearchConfigComponent implements OnInit {

  configSearch: ConfigSearch;

  constructor(private http: HttpClient , private api: ApiService ) { }

  ngOnInit() {
    this.configSearch = new ConfigSearch();
  }


  @HostListener('window:keyup', ['$event']) 
  keyEvent(event: KeyboardEvent){
    if (event.code === 'Enter' || event.keyCode === 13) {
      this.searchingConfig();
    }
  }


  searchingConfig(){

    // Get the Config Id
    // Search the result

    this.api.searchConfig(this.configSearch.searchTitle).subscribe(res => {

      console.log(res);

    },err => {
      console.log(err.message);
    });    


  }
  

}
