import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css',
})
export class HomeAccountComponent {
  tabAccounts = [
    {
      name: 'Maxime Account',
      statut: 'active',
    },
    {
      name: 'Donald Account',
      statut: 'inactive',
    },
  ];

  addNewAccount(newAcc) {
    this.tabAccounts.push(newAcc);
  }
}
