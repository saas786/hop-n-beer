import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public embeds:string[];

  constructor(public route: Router,private http: HttpClient) { }

  ngOnInit() {
    this.init();
    document.getElementById('refresh').click();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      this.init()
    }, 1000);
  }

  
  log(){
    this.route.navigate(['/pages/login']);
  }

  init(){
    var iframe;
    console.log('click');
    this.http.get("https://hopnbeer.it/facebook/lista/app").subscribe((data:string[]) =>{
      this.embeds = data;
    })
    iframe = document.getElementsByTagName('iframe');
    for(var i=0;i<iframe.length;i++){
      iframe[i].src = "https://www.facebook.com/plugins/post.php?href="+iframe[i].id+"&width=400&show_text=true&appId=601669037161505&height=417";
    }
  }  
}
