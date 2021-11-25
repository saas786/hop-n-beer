import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-google-login-button',
  templateUrl: './google-login-button.component.html',
  styleUrls: ['./google-login-button.component.scss'],
})
export class GoogleLoginButtonComponent{

  user: Observable<firebase.User>;

  constructor(private afAuth:AngularFireAuth, private gplus: GooglePlus, private platform: Platform) {

    this.user = this.afAuth.authState;

   }

  googleLogin(){
    if(this.platform.is('cordova')){
      this.nativeGoogleLogin();
    }
    else{
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(){
    try{
      const gplusUser = await this.gplus.login({
        'webClientId': "653101083789-t0v76dama6abqc69r2bohnq8elrunvnp.apps.googleusercontent.com",
        'offline': true,
        'scopes':'profile email'
      });

      return await this.afAuth.auth.signInWithCredential(
        firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken)
      );

    }
    catch(err){
      console.log(err);
    }
  }

  async webGoogleLogin(): Promise<void>{
    try{
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
    }
    catch(err){
      console.log(err);
    }
  }

}
