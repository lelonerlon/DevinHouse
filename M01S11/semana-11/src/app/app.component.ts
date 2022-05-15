import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semana-11';

  user: any = {
    nameProp: '',
    email: 0,
    cpf: 0,
    namePet: '',
    idPet: 0,
  }

  isSubmit: boolean = false;

  showOptions() {
    console.log('Username: ', this.user.name);
    console.log('CPF: ', this.user.cpf);
    console.log('Data: ', this.user.date);
    console.log('Senha: ', this.user.password);
  }

}
