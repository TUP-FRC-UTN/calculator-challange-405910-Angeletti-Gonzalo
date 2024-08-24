import { Component } from '@angular/core';

@Component({
  selector: 'app-add-calculadora',
  standalone: true,
  imports: [],
  templateUrl: './add-calculadora.component.html',
  styleUrl: './add-calculadora.component.css'
})
export class AddCalculadoraComponent {
   valor1 = 0;
   valor2 = 0;
   resultado = 5;


   recibirResultado (resultado:number){
    this.resultado = resultado;
   }

}
