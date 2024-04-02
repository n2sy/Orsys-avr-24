import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allOptions = ['', 'active', 'inactive', 'unknown'];

  @Output() addEvent = new EventEmitter();
  @ViewChild('inputName') inpName;
  @ViewChild('selectStatut') selStatut;
  sendNewAccountToHome() {
    console.log(this.inpName);
    //this.inpName.nativeElement.value = 'Donald';

    this.addEvent.emit({
      name: this.inpName.nativeElement.value,
      statut: this.selStatut.nativeElement.value,
    });
  }
}
