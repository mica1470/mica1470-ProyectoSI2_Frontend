import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FarmaciaI } from '../models/farmacia.interface';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  farmacias : FarmaciaI[];

  constructor(private httpClient: HttpClient) { 
    this.farmacias = [
      new FarmaciaI(2,'Farmacity', 'Centro', 'Nose', 123456, 'Fea')
    ];
  }

  getAll():Promise<any[] | undefined>{
    return this.httpClient.get<any[]>('http://localhost:8080/farmacia').toPromise();
  }

  create({id_farmacia, nombre_farmacia, direccion, horario, telefono, descripcion}:{id_farmacia:any, nombre_farmacia:any, direccion:any, horario:any,telefono:any,descripcion:any} ): Promise<any | undefined>{
    const bodyRequest = {id_farmacia, nombre_farmacia, direccion, horario, telefono, descripcion};

    return this.httpClient.post<any>('http://localhost:8080/farmacia', bodyRequest).toPromise();
  }
}
