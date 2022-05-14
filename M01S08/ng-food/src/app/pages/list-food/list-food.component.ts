import { Component, OnInit } from '@angular/core';
import { IComida } from 'src/app/models/comida.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngf-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.scss']
})
export class ListFoodComponent implements OnInit {

  listaComida: IComida [] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<IComida[]>("http://localhost:3000/comidas")
    .subscribe((value: IComida[]) =>  {

        this.listaComida = value;
    });
  }

}
