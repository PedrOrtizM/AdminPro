import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {


// Cuando se inicializa variables input, son valores por defecto y se pone en ngOnInit
  @Input() progreso:number = 50;
  @Input() leyenda:string = "Leyenda";
  @Output() sendValue = new EventEmitter<number>();

  // Para obtener referencia de un elemento HTML sin importar en qué componente se encuentre
  @ViewChild('textProgress')textProgress:ElementRef;


  constructor() {
  }

  ngOnInit() {

    console.log(this.progreso);
    console.log(this.leyenda);

  }

  
  whenChange( newValue:number ){

    console.log(newValue);
    console.log(this.textProgress);
    

    if( newValue >= 100 ){
      this.progreso = 100
    }else if( newValue <= 0 ){
      this.progreso = 0
    }else{
      this.progreso = newValue
    }

    this.textProgress.nativeElement.value = this.progreso;
    this.sendValue.emit(this.progreso);


  }
  cambiarValor(valor:number){


    if(this.progreso+valor>=0 && this.progreso+valor<=100){
      this.progreso +=valor;
    }
    this.sendValue.emit(this.progreso);
    console.log(this.progreso);

    // para poner el foco en un elemento

    this.textProgress.nativeElement.focus();

  }
}
