import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-resolvedor',
  standalone: true,
  imports: [],
  templateUrl: './resolvedor.component.html',
  styleUrl: './resolvedor.component.css'
})
export class ResolvedorComponent {
  @Input() valor1:any;
  @Input() valor2:any;
  @Output() total= new EventEmitter<number>();


  calcular(operacion: string){
    let resultado: number;
    resultado = this.valor1 + this.valor2;
    this.total.emit(resultado);
  }

}
