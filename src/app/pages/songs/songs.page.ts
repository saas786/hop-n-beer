import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpClient } from '@angular/common/http';
import { AlertController } from "@ionic/angular"

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {


  public available_songs:any;
  public unavailable_songs:any;

  constructor(public callNumber: CallNumber, private http: HttpClient, public alertController: AlertController) { }

  ngOnInit() {
    this.songs_list();
  }

  show(ev) {
    if (ev.detail.value == 'canzoni'){
      this.songs_list();
    }
    else{
      this.queue_list();
    }
  }

  async presentAlertConfirm(id, titolo) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sei Sicuro?',
      message: 'Sei sicuro di voler aggiungere ' + titolo + ' alla coda?',
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
            this.queue_add(id)
            console.log('Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  public queue_add(id){
    var str_id = String(id);
    let url = 'http://localhost:3000/music/queue/'.concat(str_id);

    this.http.get(url).subscribe((data)=>{
      console.log(data);
      window.location.reload();
    });
    console.log(url);
  }

  songs_list(){
    this.http.get("http://192.168.1.141:3000/music/lista/disp/app").subscribe((data) =>{        
      this.available_songs = data;
    })

    this.http.get("http://192.168.1.141:3000/music/lista/noDisp/app").subscribe((data) =>{        
      this.unavailable_songs = data;
    })
  }

  queue_list(){
    this.http.get("http://192.168.1.141:3000/music/queue/show").subscribe((data) =>{
      this.available_songs = data;
      this.unavailable_songs = [];
    })
  }

  callButton(){
    this.callNumber.callNumber("3451056969", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }
}
