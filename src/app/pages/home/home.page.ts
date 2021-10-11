import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public callNumber: CallNumber) { }

  ngOnInit() {
  }

  
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      window.location.reload();
    }, 1000);
  }

  
  callButton(){
  this.callNumber.callNumber("3314378428", true)
    .then(res => console.log('Chiamata Avviata', res))
    .catch(err => console.log('Errore nell\'avvio della chiamata', err));
}
}
