import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input({ required: true }) cl = 'red';
  @Output() childEventToFirst = new EventEmitter<string>();
  @Output() childEventToApp = new EventEmitter<string>();

  sendMsg() {
    this.childEventToFirst.emit(
      'Message de la part du Child Component vers le First'
    );
    this.childEventToApp.emit(
      'Message de la part du Child Component vers le App'
    );
  }
}
