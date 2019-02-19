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
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { FormsModule }  from '@angular/forms'
import { ChartsModule } from 'ng2-charts/ng2-charts';



@NgModule({
  declarations: [
    Graficas1Component,   
    DashboardComponent,
    ProgressComponent,
    PagesComponent ,
    IncrementadorComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule
  ],
  exports:[
    Graficas1Component,   
    DashboardComponent,
    ProgressComponent
  ]
})
export class PagesModule { }
