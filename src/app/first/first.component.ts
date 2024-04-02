import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  topic = 'angular';
  cabinet = 'Orsys';
  color = 'pink';
  hd = true;

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
