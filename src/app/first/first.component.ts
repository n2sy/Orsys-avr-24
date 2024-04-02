import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  topic = 'angular';
  cabinet = 'Orsys';
  color = 'yellow';
  hd = true;

  showAlert() {
    alert("J'ai été cliqué !");
  }
}
