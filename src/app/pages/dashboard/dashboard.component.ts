import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  title = 'Farmacias cercanas';

  position = {
    lat: -44.258,
    lng: -54.888
  }
  
  label = {
    color: 'red',
    text: 'Cerrada'
  }

}
