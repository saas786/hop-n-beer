import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-off',
  templateUrl: './off.page.html',
  styleUrls: ['./off.page.scss'],
})
export class OffPage implements OnInit {

  constructor(public callNumber: CallNumber) { }

  ngOnInit() {
  }

  callButton(){
    this.callNumber.callNumber("3314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }
}
