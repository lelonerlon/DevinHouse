import { Component, OnInit } from '@angular/core';
import { LISTA_COMIDAS_MOCK } from 'src/app/const/comida-model';
import { IComida } from 'src/app/models/comida.model';

@Component({
  selector: 'ngf-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  listaComida: IComida [] = LISTA_COMIDAS_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

}
