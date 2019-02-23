import { Component, OnInit} from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public settingService: SettingsService ) { }

  ngOnInit() {

    this.checkPersitente();

  }


  cambiarColor(tema:string,link:any){

    // envía el link a la función para aplicar check
    this.aplicarCheck(link);
    this.settingService.aplicarTema(tema)

  }

  aplicarCheck(link:any){

    // obtiene todos los elementos con clase selector
    let selectores:any = document.getElementsByClassName( 'selector' )

    // removemos de los elementos la clase working
    for (let ref of selectores) {
      ref.classList.remove('working')
    }

    // al link que es pasado por parámetro le asignamos la clase working para que esté seleccioando
    link.classList.add('working');
  }


  checkPersitente(){
    // obtiene todos los elementos con clase selector
    let selectores:any = document.getElementsByClassName( 'selector' )

    // buscamos el tema que está puesto
    let tema = this.settingService.ajustes.tema;


    
    for (let ref of selectores) {
      
      // si algun selector tiene el tema que está puesto le agregamos la clase del check
      if( ref.getAttribute('data-theme') === tema){
        ref.classList.add('working');
        break;
      }
    }


  }

}
