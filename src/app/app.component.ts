import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

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
  constructor(public callNumber: CallNumber) {}
  call(){
    this.callNumber.callNumber("3314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }
}
