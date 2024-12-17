import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListasComponent } from './components/listas/listas.component';
import { DetalheListaComponent } from './components/detalhe-lista/detalhe-lista.component';
import { HttpClientModule } from '@angular/common/http'//Servirá para realizações de requisições http
import { FormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';// Servirá para utilizar nos formulários

@NgModule({
  declarations: [
    AppComponent,
    ListasComponent,
    DetalheListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
