import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth'



import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CallNumber } from "@ionic-native/call-number/ngx"
import { HttpClientModule } from '@angular/common/http';



const firebaseConfig = {
  
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,RouterModule,CommonModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule, AngularFireModule.initializeApp(firebaseConfig),AngularFireAuthModule],
  providers: [GooglePlus,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },CallNumber],
  bootstrap: [AppComponent],
})
export class AppModule {}
