import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'semana-11';

  arraylist: string [] = [
       'Bad Boys',
       'Velozes e Furiosos',
       'Alto da compadecida',
       'Pinguim de Madagascar',
       'Procurando Nemo'
  ]
}
