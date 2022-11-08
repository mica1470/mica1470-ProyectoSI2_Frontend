export class FarmaciaI{
    id_farmacia: Number;
    nombre_farmacia: String;
    direccion: String;
    horario: String;
    telefono: Number;
    descripcion: String;

    constructor(id: number, nombre:string, dir:string, hor:string, tel:number,desc:string){
        this.id_farmacia = id;
        this.nombre_farmacia = nombre;
        this.descripcion = desc;
        this.direccion = dir;
        this.horario = hor;
        this.telefono = tel;
    }
}