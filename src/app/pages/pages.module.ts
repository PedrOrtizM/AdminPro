//Modulos 
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';



//Componentes
import { PagesComponent } from './pages.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaDonaComponent } from '../components/grafica-dona/grafica-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';


//Rutas
import { PagesRoutingModule } from './pages.routes';

//Modulos
import { FormsModule }  from '@angular/forms'
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    Graficas1Component,   
    DashboardComponent,
    ProgressComponent,
    PagesComponent ,
    IncrementadorComponent,
    GraficaDonaComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
    FormsModule,
    ChartsModule,
    BrowserModule,
    CommonModule
  ],
  exports:[
    Graficas1Component,   
    DashboardComponent,
    ProgressComponent
  ]
})
export class PagesModule { }
