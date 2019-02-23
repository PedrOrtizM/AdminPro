
// Módulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';



//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';


// Servicios
import { ServiceModule } from './services/service.module';

//Rutas
import { AppRoutingModule } from './app.routes';



@NgModule({
  declarations: [     
    AppComponent,
    LoginComponent,
    RegisterComponent
    

  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
