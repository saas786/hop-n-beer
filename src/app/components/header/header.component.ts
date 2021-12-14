import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public callNumber: CallNumber, private http:HttpClient, public route:Router, public alertController:AlertController) { }
  
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

  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: "Siamo Chiusi!",
      message: 'Ora siamo chiusi, prova a richiamarci dopo le 18:30',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  goHome(){
    this.route.navigate(['/pages/home']);
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

  ngOnInit() {}

}
