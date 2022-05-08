import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IBebida } from 'src/app/models/bebida.model';

@Component({
  selector: 'ngf-list-drink',
  templateUrl: './list-drink.component.html',
  styleUrls: ['./list-drink.component.scss']
})
export class ListDrinkComponent implements OnInit {

  listaBebida: IBebida[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get<IBebida[]>("http://localhost:3000/bebidas")
    .subscribe((value: IBebida[]) =>  {

        this.listaBebida = value;
    });
  }

}
