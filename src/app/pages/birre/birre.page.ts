import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

interface Birra {
  nome: string;
  id: number;
  circle_logo: string;
  square_logo: string;
}

@Component({
  selector: 'app-birre',
  templateUrl: './birre.page.html',
  styleUrls: ['./birre.page.scss'],
})
export class BirrePage implements OnInit {

  public colors:any;
  public birre:Birra[];
  public info:any;

  constructor(public actionSheetController: ActionSheetController,private route:Router, public callNumber: CallNumber, private http: HttpClient, public alertController: AlertController) { }


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

  birre_list(){
    this.http.get("https://hopnbeer.it/birre/lista/app").subscribe((data:Birra[]) =>{        
      this.birre = data;
    })
  }

  info_birra(id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id)
      }
    };
    this.route.navigate(['/pages/info-birra'],navigationExtras)
  }
}