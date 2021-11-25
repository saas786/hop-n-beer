import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

interface Birra {
  nome: string;
  id: number;
  birrificio: string;
  circle_logo: string;
  square_logo: string;
  gradi: number;
  colore: string;
  prezzo02: number;
  prezzo04: number;
  nazione: string;
  tipo: string;
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
    this.callNumber.callNumber("+393314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }

  birre_list(){
    this.http.get("https://hopnbeer.it/birre/lista/app").subscribe((data:Birra[]) =>{        
      this.birre = data;
    })
  }

  showBeer(id){
    this.birre.forEach(element => {
      if(element.id == id){
        this.info = element;
      }
    });

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
