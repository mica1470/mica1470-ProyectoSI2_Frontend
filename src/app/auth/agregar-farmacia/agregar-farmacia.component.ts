import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-farmacia',
  templateUrl: './agregar-farmacia.component.html',
  styleUrls: ['./agregar-farmacia.component.css']
})
export class AgregarFarmaciaComponent implements OnInit {

  agregarForm = new FormGroup({
    id_farmacia: new FormControl('', Validators.required),
    nombre_farmacia: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
    horario: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    id_usuario: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

  onAgregar(form: any){
    console.log(form);
  }

}
