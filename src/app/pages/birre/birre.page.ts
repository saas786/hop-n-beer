import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-birre',
  templateUrl: './birre.page.html',
  styleUrls: ['./birre.page.scss'],
})
export class BirrePage implements OnInit {

  public colors:any;
  public birre:any;

  constructor(private route:Router, public callNumber: CallNumber, private http: HttpClient, public alertController: AlertController) { }

  ngOnInit() {
    this.birre_list();
  }

  goHome(){
    this.route.navigate(['/pages/home']);
  }
 
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.birre_list();
    }, 1000);
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
    this.callNumber.callNumber("+393314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }

  birre_list(){
    this.http.get("https://fa73-37-163-59-138.ngrok.io/birre/lista/app").subscribe((data) =>{        
      this.birre = data;
    })
  }

}
