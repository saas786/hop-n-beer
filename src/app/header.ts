import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  template: `
  <ion-header> 
    <ion-toolbar color="primary">
      <div class="titolo" (click)="goHome()">
        <ion-title mode="ios">
          <img id="logo" src="./assets/images/logo-title.webp">
        </ion-title>
      </div>
      <div class="menu">
        <ion-menu-button color="dark" slot="start" ></ion-menu-button>
      </div>
      <ion-button class="call" slot="end" fill="clear" color="dark" (click)="presentAlertConfirm()">
        <ion-icon id="call-icon" name="call"></ion-icon>
      </ion-button>
    </ion-toolbar>
  </ion-header>
  `
})

export class HeaderComponent {
  constructor(public callNumber: CallNumber, public route:Router, public alertController:AlertController) {}

  call(){
    this.callNumber.callNumber("+393314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }

  goHome(){
    this.route.navigate(['/pages/home']);
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Avviare la Chiamata?',
      message: 'Sei sicuro di voler chiamare il locale Hop \'N\' Beer?',
      buttons: [
        {
          text: 'Annulla',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Annullato')
          }
        }, {
          text: 'Ok',
          handler: () => {
            this.call()
            console.log('Okay');
          }
        }
      ]
    });

    await alert.present();
  }



}
