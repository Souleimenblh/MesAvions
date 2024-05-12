import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvionsComponent } from './avions/avions.component';
import { AddAvionComponent } from './add-avion/add-avion.component';
import { FormsModule } from '@angular/forms';
import { UpdateAvionComponent } from './update-avion/update-avion.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent, AvionsComponent, AddAvionComponent, UpdateAvionComponent],
  imports: [BrowserModule,
     AppRoutingModule,
      FormsModule,
      HttpClientModule
    ],  

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
