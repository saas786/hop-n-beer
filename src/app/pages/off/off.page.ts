import { HttpClient } from '@angular/common/http';
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

  constructor(public callNumber: CallNumber, private http:HttpClient, private route: Router, private alertController: AlertController) { }

  ngOnInit() {
  
  }

  goHome(){
    this.route.navigate(['/pages/home']);
  }

  doRefresh(event) {
    console.log('Ricarico...');

    setTimeout(() => {
      console.log('Pagina Ricaricata');
      if (event != null){
        event.target.complete();
      }
      this.goToSongs();
    }, 1000);
  }


  goToSongs(){
    this.http.get("https://hopnbeer.it/check").subscribe(data =>{
      if (data['state']==false){
        console.log('spento');
      }
      else{
        console.log('acceso');
        this.route.navigate(['/pages/songs']);
      }
    })
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Avviare la Chiamata?',
      message: 'Sei sicuro di voler chiamare il Hop \'N\' Beer?',
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
    this.callNumber.callNumber("+393387020803", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }
}
