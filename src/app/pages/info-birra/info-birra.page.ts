import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-info-birra',
  templateUrl: './info-birra.page.html',
  styleUrls: ['./info-birra.page.scss'],
})
export class InfoBirraPage implements OnInit {
  public id:any;
  public info:Birra;
  public image: HTMLImageElement;
  constructor(private route: ActivatedRoute, private router:Router, private http:HttpClient) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.id = params.special;
      }
    });
  }


  ngOnInit() {
    this.get_info();
    this.cerchi();
  }

  get_info(){
    this.http.get("https://hopnbeer.it/birre/info/"+this.id).subscribe((data:Birra) =>{
      this.info = data;
      // Colori
      document.getElementById('background').style.backgroundColor = this.info.colore;
      var cerchi = Array.from(document.getElementsByClassName('cerchi') as HTMLCollectionOf<HTMLElement>);
      cerchi.forEach((element) => {
        element.style.backgroundColor = this.info.colore;
      });

      // Foto Birrificio
      var birrificio = document.getElementById("birrificio") as HTMLImageElement;
      birrificio.src = "https://hopnbeer.it"+this.info.circle_logo;

      // Titolo
      var titolo = document.getElementById("titolo")
      titolo.innerText = this.info.nome;
      
      // Tutte le Info

      //Colonna 1
      document.getElementById("stile-p").innerText = this.info.tipo;
      //document.getElementById("colore-p").innerText = this.info.nomeColore;
      document.getElementById("colore-rett").style.backgroundColor = this.info.colore;
      document.getElementById("prezzo02-p").innerText =  "€" + ((this.info.prezzo02).toFixed(2)).toString();

      //Colonna 2
      document.getElementById("abv-p").innerText = (this.info.gradi).toString()+"%";

      console.log(this.info.nazione);
      var bandiera = document.getElementById("bandiera") as HTMLImageElement;
      bandiera.src = "https://hopnbeer.it/static/flags/"+this.info.nazione+".jpg";
      
      document.getElementById("nazione-p").innerText = this.info.nazione;
      document.getElementById("prezzo04-p").innerText =  "€"+((this.info.prezzo04).toFixed(2)).toString();

  })
}


 
doRefresh(event) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
    this.get_info();
  }, 1000);
}

  cerchi(){
    var cerchi = Array.from(document.getElementsByClassName('cerchi') as HTMLCollectionOf<HTMLElement>);
    cerchi.forEach((element) => {

      element.style.top = (100*Math.random()) + "%";
      element.style.left = (100*Math.random()) + "%";
      element.style.width = ((1.5*Math.random())+3) + "%";
      element.style.height = element.style.width;
    });
  }


}
