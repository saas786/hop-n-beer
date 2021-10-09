import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {


  public items:any;
  constructor(public callNumber: CallNumber, private http: HttpClient) { }

  ngOnInit() {
    this.songs_list();
  }

  queue(id){
    var str_id = String(id);
    let url = 'http://localhost:3000/music/queue/'.concat(str_id);

    this.http.get(url).subscribe((data)=>{
      console.log(data);
    });
    console.log(url);
  }

  songs_list(){
    this.http.get("http://192.168.1.141:3000/music/lista/app").subscribe((data) =>{
      this.items = data
    })
  }

  callButton(){
    this.callNumber.callNumber("3451056969", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }
}
