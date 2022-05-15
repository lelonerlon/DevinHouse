import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semana-11';

  showModal: boolean = true;
  username: string = '';
  date: number = 0;
  cpf: number = 0;
  password: any = '';


}
