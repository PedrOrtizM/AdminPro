import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingsService {

  ajustes:Ajustes ={
    temaUrl: 'assets/css/colors/default-dark.css',
    tema: 'default'
  }

  // Forma de inyección para leer el Document y obtener atributos

  constructor(@Inject(DOCUMENT) private _document ) {
    this.cargarAjustes();
   }


  guardarAjustes(){

    // guardamos en el localStorage los ajustes en fomato string ( LS solo alcena strings)
    localStorage.setItem('ajustes',JSON.stringify( this.ajustes ))
    

  }
  
  cargarAjustes(){

    if ( localStorage.getItem( 'ajustes' )  ){
      
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
   
      this.aplicarTema( this.ajustes.tema );
      
    }else{
      this.aplicarTema( this.ajustes.tema );
    }

  }
  
  aplicarTema( tema:string ){

    // url para cambiar el tema de la plantilla
    let url = `assets/css/colors/${ tema }.css`;

    // obtiene el elemento con id theme en index.html y le pone el atributo url a href
    this._document.getElementById('theme').setAttribute('href',url)
   
  

    // Asignamos a la vatriable ajuste los nuevos temas
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
  }



  // Interface para controlar los ajustes
interface Ajustes{
  temaUrl: string;
  tema:string;
    
}