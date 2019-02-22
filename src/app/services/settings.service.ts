import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
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

    console.log("Guardado tema en el LocalStorage");
    

  }
  
  cargarAjustes(){

    if ( localStorage.getItem( 'ajustes' )  ){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
      console.log("cargando del local storage");
      this.aplicarTema( this.ajustes.tema );
      
    }else{
      console.log("usando valores por defecto");
      this.aplicarTema( this.ajustes.tema );
    }

  }
  
  aplicarTema( tema:string ){

    let url = `assets/css/colors/${ tema }.css`;
    // obtiene el elemento con id theme en index.html y le pone el atributo url a href
    this._document.getElementById('theme').setAttribute('href',url)
   
  

    // Mandamos al servicio el tema y url y guardamos en el localStorage
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
  }



interface Ajustes{
  temaUrl: string;
  tema:string;
    
}