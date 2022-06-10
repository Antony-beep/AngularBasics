import { Component } from "@angular/core";


@Component({
    selector:'heroe',
    templateUrl:'./heroe.component.html'
})
export class HeroeComponent {
    nombre:string ='Iron Man';
    edad:number =45;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;

    }
    cambiarNombre():void{
        this.nombre = 'Batman';
    }
    cambiarEdad():void{
        this.edad = 30;
    }
}