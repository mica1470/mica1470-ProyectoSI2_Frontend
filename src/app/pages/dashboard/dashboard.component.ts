import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
  title = 'Farmacias cercanas';

  positionJujuy = {
    lat: -24.1945700,
    lng:  -65.2971200
  }

  farmacias = [{
    position: {
      lat: -24.19627,
      lng: -65.29501
    },    
    label: {
      color: 'red',
      text: 'Farmacity'
    }
  },
  {
    position: { 
      lat: -24.191758173008044,
      lng: -65.30152887021774
    },    
    label: {
      color: 'yellow',
      text: 'Farmacia Alquimia'
    }
  },
  {
    position: {
       
      lat: -24.199822092540714,
      lng: -65.28910487887238
    },    
    label: {
      color: 'green',
      text: 'Farmacia  Farmar'
    }
  },
  {
    position: {
      lat: -24.20074197328398,
      lng: -65.29751628579359
    },    
    label: {
      color: 'red',
      text: 'Rosario'
    }
  }
  ];
  

}
