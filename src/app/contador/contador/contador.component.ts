import { Component } from "@angular/core";


@Component({
    selector:'app-contador',
    template:`

    <h2>{{titulo}}</h2>
    <h3>La base es: <strong>{{base}}</strong></h3>
    
    <button (click)="acumular(base)">+ 5</button>
    
    <span>{{contador}}</span>
    
    <button (click)="acumular(-base)">- 5</button>
    `,
    styleUrls:['contador.component.css']
})
export class ContadorComponent{
    titulo = 'Contador App';

    contador:number = 10;
  
    base:number = 5;
  
    acumular(valor:number){
      this.contador += valor;
  
    }
}