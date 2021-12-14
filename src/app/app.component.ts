import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { menuController } from "@ionic/core";


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
    { title: 'JukeBox', url: '/pages/songs'}
  ];
  constructor(private callNumber: CallNumber, private route: Router, private alertController: AlertController, private http: HttpClient) {}
  
  call(){
    this.http.get("https://hopnbeer.it/check").subscribe(data =>{
      if(data['state']==false){
        this.presentAlert();
      }
      else{
        this.callNumber.callNumber("+393387020803", true)
          .then(res => console.log('Chiamata Avviata', res))
          .catch(err => console.log('Errore nell\'avvio della chiamata', err));
      }
    })
  }
  
  goToHome(){
    menuController.toggle()
    this.route.navigate(['/pages/home']);
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Siamo Chiusi!",
      message: 'Ora siamo chiusi, prova a richiamarci dopo le 18:00',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Avviare la Chiamata?',
      message: 'Sei sicuro di voler chiamare Hop \'N\' Beer?',
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
