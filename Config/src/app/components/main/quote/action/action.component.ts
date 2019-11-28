import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToConfigComponent() {
    this.route.navigate(['config', 1234]);
  }

}
