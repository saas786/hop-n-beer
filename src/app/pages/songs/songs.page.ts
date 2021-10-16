import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpClient } from '@angular/common/http';
import { AlertController } from "@ionic/angular";
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

  public searchTerm:string;
  public available_songs:any;
  public unavailable_songs:any;

  public available_songs_backup:any;
  public unavailable_songs_backup:any;
  public queue_songs:any;


  constructor(public callNumber: CallNumber, private http: HttpClient, public alertController: AlertController, private route: Router) { }

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
    let url = 'https://d61d-79-19-191-69.ngrok.io/music/queue/'.concat(str_id);

    this.http.get(url).subscribe((data)=>{
      console.log(data);
      window.location.reload();
    });
    console.log(url);
  }

  songs_list(){
    this.http.get("https://d61d-79-19-191-69.ngrok.io/music/lista/disp/app").subscribe((data) =>{        
      this.queue_songs = [];
      this.available_songs = data;
    })

    this.http.get("https://d61d-79-19-191-69.ngrok.io/music/lista/noDisp/app").subscribe((data) =>{        
      this.queue_songs = [];
      this.unavailable_songs = data;
    })
  }

  queue_list(){
    this.http.get("https://d61d-79-19-191-69.ngrok.io/music/queue/show").subscribe((data) =>{
      this.queue_songs = data;
      this.unavailable_songs = [];
      this.available_songs = [];
    })
  }

  check(){
    this.http.get("https://d61d-79-19-191-69.ngrok.io/check").subscribe((data) =>{
      if (data=="False"){
        this.route.navigate(['/pages/off']);
      }
    })
  }

  
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      window.location.reload();
    }, 1000);
  }

  callButton(){
    this.callNumber.callNumber("3314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }
}
