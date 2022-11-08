import { Component, OnInit } from '@angular/core';
import { FarmaciaI } from 'src/app/models/farmacia.interface';
import { FarmaciaService } from 'src/app/services/farmacia.service';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent{

  arrFarmacia: any[] | undefined;



  constructor( private farmaciaService: FarmaciaService) {
    this.arrFarmacia = [];
   }

  ngOnInit(): void {
    this.farmaciaService.getAll()
    .then(farmacias => this.arrFarmacia = farmacias)
    .catch(error =>console.error(error));
    
  }

}
