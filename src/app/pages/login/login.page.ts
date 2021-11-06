import { Component, OnInit } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private googlePlus: GooglePlus, private menuCtrl:MenuController) {this.menuCtrl.enable(false);}

  ngOnInit() {
  }

  google_login(){
    this.googlePlus.login({})
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }
  
  onSignIn(googleUser){
    var profile = googleUser.getBasicProfile();
    var Nome = profile.getName();
  }

}
