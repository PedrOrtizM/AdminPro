import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo:string;

  constructor(private router:Router,
              private meta: Meta,
              private title: Title) {

    this.getDataRoute().subscribe(data=>{
    
      this.titulo = data.titulo;
      this.title.setTitle( this.titulo ); // Para Poner el nombre de la página en la pestaña

      // Creamos metaTags para nuestra página lo ideal sería enviarlo desde la ruta como el titulo
      const metaTag:MetaDefinition = {
        name: 'decription',
        content: this.titulo
      }
      this.meta.updateTag( metaTag );
    });
    
    
  }
  
  ngOnInit() {
  
 
  }


  getDataRoute(){

   return this.router.events.pipe( 
      
    filter( evento =>  evento instanceof ActivationEnd ),
    filter( (evento:ActivationEnd) => evento.snapshot.firstChild ===null ),
    map( (evento:ActivationEnd) => evento.snapshot.data)
  
   )

  }

}
