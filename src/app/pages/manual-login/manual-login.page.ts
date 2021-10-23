import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-manual-login',
  templateUrl: './manual-login.page.html',
  styleUrls: ['./manual-login.page.scss'],
})
export class ManualLoginPage implements OnInit {

  constructor(private menuCtrl:MenuController) {this.menuCtrl.enable(false);}

  ngOnInit() {
  }

}
