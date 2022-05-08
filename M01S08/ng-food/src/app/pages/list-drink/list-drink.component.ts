import { Component, OnInit } from '@angular/core';
import { LISTA_BEBIDAS_MOCK } from 'src/app/const/bebidas-mock';
import { IBebida } from 'src/app/models/bebida.model';

@Component({
  selector: 'ngf-list-drink',
  templateUrl: './list-drink.component.html',
  styleUrls: ['./list-drink.component.scss']
})
export class ListDrinkComponent implements OnInit {

  listaBebida: IBebida [] = LISTA_BEBIDAS_MOCK;

  constructor() { }

  ngOnInit(): void {
  }

}
