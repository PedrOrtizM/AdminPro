import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';


//Rutas
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    Graficas1Component,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    ProgressComponent,
    PagesComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
