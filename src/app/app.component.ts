import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
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

  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Message Content',
    });
  }

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
    });
  }

  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
    });
  }

  showWarn() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: 'Message Content',
    });
  }

  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Message Content',
    });
  }
}
