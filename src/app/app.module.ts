import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './modules/app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

// Módulo de Importacion de Servicios
import { AppServicesModule } from './modules/app-services.module';

// Componentes de la aplicación
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login.component';
import { HomeComponent } from './components/home.component';
import { ExchangeBooleanPipe } from './utils/pipes/exchange-boolean.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ExchangeBooleanPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AppServicesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
