export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    descripcion: String;
    img: String;
    imgFondo: String;

    constructor(nombre: String, apellido: String, descripcion: String, img: String, imgFondo: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.img = img;
        this.imgFondo = imgFondo;
    }
}