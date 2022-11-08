import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FarmaciaService } from 'src/app/services/farmacia.service';

@Component({
  selector: 'app-agregar-farmacia',
  templateUrl: './agregar-farmacia.component.html',
  styleUrls: ['./agregar-farmacia.component.css']
})
export class AgregarFarmaciaComponent implements OnInit {

  agregarForm: FormGroup;

  constructor( private farmaciaService: FarmaciaService) { 
    this.agregarForm = new FormGroup ({
      id_farmacia: new FormControl(''),
      nombre_farmacia: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      horario: new FormControl(''),
      descripcion: new FormControl(''),
      id_usuario: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(){
    try{
      const response = await this.farmaciaService.create(this.agregarForm.value);
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  onAgregar(form: any){
    console.log(form);
  }

}
