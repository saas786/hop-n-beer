import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/pages/home'},
    { title: 'Menu', url: '/pages/menu'},
    { title: 'Spina', url: '/pages/spina'},
    { title: 'Musica', url: '/pages/musica'},
    { title: "Ape 'N' Beer", url: '/pages/ape'}
  ];
  constructor() {}
}
