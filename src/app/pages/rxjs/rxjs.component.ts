import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import {  retry, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit {

  constructor() { 

   

    this.retornaObs()
    // .pipe(
    //   retry(2))
    .subscribe(
      data=>console.log(data),
      err=>console.log('ERROR',err),
      ()=>console.log("Obs completado")
      );
    
  }

  ngOnInit() {
  }


  retornaObs():Observable<any>{
    
    return new Observable( (observer:Subscriber<any>)=>{

      let contador = 0;
      const intervalo = setInterval( ()=>{

        contador+=1;

        let objeto = {
          valor: contador
        }

        observer.next(objeto);

        if (contador === 3){
          clearInterval( intervalo);
          observer.complete();
        }
        
        // if( contador == 2 ){
        //   clearInterval( intervalo);
        //   observer.error("error")
        // }

      },1000)

    }).pipe(
      map( (data)=>data.valor),
      filter((valor,index)=>{
        
        if(valor%2===1){
          return true;
        }else{
          return false;
        }
        

      })
    );



  }

}
