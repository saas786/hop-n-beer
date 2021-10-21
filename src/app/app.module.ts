import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GooglePlus } from '@ionic-native/google-plus/ngx';



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CallNumber } from "@ionic-native/call-number/ngx"
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header';


@NgModule({
  declarations: [AppComponent, HeaderComponent],
  entryComponents: [],
  imports: [BrowserModule,RouterModule,CommonModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CallNumber, GooglePlus],
  bootstrap: [AppComponent],
})
export class AppModule {}
