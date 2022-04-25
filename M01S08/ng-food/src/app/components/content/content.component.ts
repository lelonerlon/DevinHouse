import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

    list = [{
    title: "Cardápio de Comida",
    cardText: "As melhores bebidas podem ser escolhidas aqui",
    btnText: "Saiba mais",
    src:'https://caminhoslanguages.com/wp-content/uploads/2020/04/traditional-brazilian-foods-1.jpg',
  },
  {
    title: "Cardápio de Bebida",
    cardText: "As melhores bebidas podem ser desgustadas aqui",
    btnText: "Saiba mais",
    src:'https://minhasaude.proteste.org.br/wp-content/uploads/2019/12/74599606_m-970x472.jpg',
  }];


  constructor() { }

  selectedCard(item:string){
    alert(`Clicou no ${item}`)
  }

  ngOnInit(): void {
  }

}
