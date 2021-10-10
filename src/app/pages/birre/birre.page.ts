import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-birre',
  templateUrl: './birre.page.html',
  styleUrls: ['./birre.page.scss'],
})
export class BirrePage implements OnInit {

  public colors:any;
  public birre:any;

  constructor(public callNumber: CallNumber, private http: HttpClient) { }

  ngOnInit() {
    this.songs_list();
  }
  
  callButton(){
    this.callNumber.callNumber("3314378428", true)
      .then(res => console.log('Chiamata Avviata', res))
      .catch(err => console.log('Errore nell\'avvio della chiamata', err));
  }

  songs_list(){
    this.http.get("http://localhost:3000/birre/lista/app").subscribe((data) =>{        
      this.birre = data;
    })
  }

}
