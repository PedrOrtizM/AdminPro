//Modulos 
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';



//Componentes
import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';


//Rutas
import { PagesRoutingModule } from './pages.routes';



@NgModule({
  declarations: [
    Graficas1Component,   
    DashboardComponent,
    ProgressComponent,
    PagesComponent 
  ],
  imports: [
    SharedModule,
    PagesRoutingModule
  ],
  exports:[
    Graficas1Component,   
    DashboardComponent,
    ProgressComponent
  ]
})
export class PagesModule { }
