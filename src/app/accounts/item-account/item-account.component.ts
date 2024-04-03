import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-account',
  templateUrl: './item-account.component.html',
  styleUrl: './item-account.component.css',
})
export class ItemAccountComponent {
  @Input() oneAccount;

  changeStatut(newStatut) {
    this.oneAccount.statut = newStatut;
  }
}
