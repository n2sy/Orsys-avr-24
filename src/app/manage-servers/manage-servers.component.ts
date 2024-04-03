import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  selectedStatut = '';
  p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Angular Chez Klee');
    }, 2000);
  });

  tabServers = [
    {
      nom: 'Production Server',
      type: 'medium',
      date_d: new Date(2022, 5, 4),
      statut: 'critical',
    },
    {
      nom: 'Production Test Server',
      type: 'small',
      date_d: new Date(2023, 8, 8),
      statut: 'stable',
    },
    {
      nom: 'Development Test Server',
      type: 'medium',
      date_d: new Date(),
      statut: 'offline',
    },
    {
      nom: 'Nidhal Server',
      type: 'large',
      date_d: new Date(2022, 5, 4),
      statut: 'stable',
    },
  ];

  addServer() {
    this.tabServers.push({
      nom: 'New Server',
      type: 'large',
      date_d: new Date(2022, 5, 4),
      statut: 'stable',
    });
  }

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical', // ? true : false,
      'list-group-item-warning': st == 'offline', // ? true : false,
    };
  }
}
