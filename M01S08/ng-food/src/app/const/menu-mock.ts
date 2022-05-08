import { IMenu } from "../models/menu.model"

export const LIST_MENU_MOCK: IMenu[] = [

  {
    id: 1,
    title: "Cardápio de Comida",
    cardText: "As melhores bebidas podem ser escolhidas aqui",
    btnText: "Saiba mais",
    src: 'https://caminhoslanguages.com/wp-content/uploads/2020/04/traditional-brazilian-foods-1.jpg',
    path: '/comidas',
  },
  {
    id: 2,
    title: "Cardápio de Bebida",
    cardText: "As melhores bebidas podem ser desgustadas aqui",
    btnText: "Saiba mais",
    src: 'https://minhasaude.proteste.org.br/wp-content/uploads/2019/12/74599606_m-970x472.jpg',
    path: '/bebidas',
  }
];

