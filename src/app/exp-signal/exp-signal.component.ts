import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-exp-signal',
  templateUrl: './exp-signal.component.html',
  styleUrl: './exp-signal.component.css',
})
export class ExpSignalComponent {
  mySignal = signal('Angular');

  updateSignal() {
    this.mySignal.update((previousVal) => previousVal + '.....');
  }
}
