import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'orsys-avr-24';

  prenom: string;
  age;

  traitementDuApp(info) {
    this.title = info;
  }
}
