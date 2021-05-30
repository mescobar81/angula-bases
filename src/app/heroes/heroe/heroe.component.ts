import { Component } from "@angular/core";



@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{

    nombre:string = 'Mujer Maravilla!!';
    edad:number = 35;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }
    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre = 'El dios del trueno (Thor)';
    }

    cambiarEdad():void{
        this.edad = 40;
    }
}