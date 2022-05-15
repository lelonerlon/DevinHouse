import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semana-11';

  arrayFotos: any = [
    {
      url: "https://www.viagenscinematograficas.com.br/wp-content/uploads/2017/02/Morro-de-SP-Melhores-Praias-28.jpg",
      description: "Morro de São Paulo - BA"
    },
    {
      url: "https://dicasdonossobrasil.com.br/wp-content/uploads/2018/05/Praia-do-Porto-da-Barra-Forte.jpg",
      description: "Porto da Barra - Salvador - BA"
    },
    {
      url: "https://www.chapadaadventure.com.br/wp-content/uploads/2020/06/chapada-diamantina-cachoeira-fumaca.jpg",
      description: "Chapada Diamantina - BA"
    },
    {
      url: "https://eshop-api.emutuadigital.com/storage/4/catalog/productMedia/6155dc2c28a705121/6155dc2d008312417.png",
      description: "Trancoso - BA"
    },
    {
      url: "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-gramado-capa2019-04.jpg",
      description: "Gramado = RS"
    }
  ]

}
