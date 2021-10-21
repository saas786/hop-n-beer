import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';
import { HeaderComponent } from "./header"

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/pages/home'},
    { title: 'Menu', url: '/pages/menu-page'},
    { title: 'Spina', url: '/pages/birre'},
    { title: 'Musica', url: '/pages/songs'},
    { title: "Ape 'N' Beer", url: '/pages/ape'}
  ];
  constructor() {}

}
