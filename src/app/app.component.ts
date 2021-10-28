import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';

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
  constructor(private callNumber: CallNumber, private alertController: AlertController) {}
  
  call(){
    this.callNumber.callNumber("+393314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
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
