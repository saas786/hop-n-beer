import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-off',
  templateUrl: './off.page.html',
  styleUrls: ['./off.page.scss'],
})
export class OffPage implements OnInit {

  constructor(public callNumber: CallNumber, private route: Router, private alertController: AlertController) { }

  ngOnInit() {
  
  }

  goHome(){
    this.route.navigate(['/pages/home']);
  }

  goToSongs(){
    this.route.navigate(['/pages/songs']);
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
            this.callButton()
            console.log('Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  callButton(){
    this.callNumber.callNumber("3314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }
}
