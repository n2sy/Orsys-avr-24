import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  topic = 'angular';
  cabinet = 'Orsys';
  color = 'pink';
  hd = true;

  cand = new Candidat(1, 'aa', 'aa', 'aa', 23, 'ee');

  showAlert() {
    alert("J'ai été cliqué !");
  }

  traitementDuFirst(msg) {
    alert(msg);
  }
  traitementDuFirst2(msg) {
    console.log(msg);
  }
}
