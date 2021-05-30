import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes:string[] = ['SuperMan', 'Ironman', 'Mujer Maravilla!!', 'Thor'];
  borrado:string = "";
  constructor() { }

  ngOnInit(): void {
  }


  onClick():void{
    
    this.borrado = this.heroes.shift() || '';//ver: "|| ''" indica que va devolver vacio si no hay elementos que eliminar

  }
}
