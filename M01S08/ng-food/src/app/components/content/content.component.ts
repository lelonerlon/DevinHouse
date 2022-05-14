import { Component, OnInit } from '@angular/core';
import { IComida } from 'src/app/models/comida.model';
import { IMenu } from 'src/app/models/menu.model';
import { IBebida } from 'src/app/models/bebida.model';
import { LISTA_BEBIDAS_MOCK } from 'src/app/const/bebidas-mock';
import { LISTA_COMIDAS_MOCK } from 'src/app/const/comida-model';
import { LIST_MENU_MOCK } from 'src/app/const/menu-mock';
import { Router } from '@angular/router';

@Component({
  selector: 'ngf-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  listMenu: IMenu[] = LIST_MENU_MOCK;

  // listaComidas: IComida[] = LISTA_COMIDAS_MOCK;

  // listaBebidas: IBebida[] = LISTA_BEBIDAS_MOCK;

  constructor(private route: Router) { }

  redirecionar(path: string) {
   this.route.navigateByUrl(path);
  }

  ngOnInit(): void {
  }

}
