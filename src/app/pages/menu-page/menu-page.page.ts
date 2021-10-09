import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.page.html',
  styleUrls: ['./menu-page.page.scss'],
})
export class MenuPagePage implements OnInit {

  constructor(public callNumber: CallNumber) { }

  ngOnInit() {
  }
  callButton(){
    this.callNumber.callNumber("3451056969", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }
}
