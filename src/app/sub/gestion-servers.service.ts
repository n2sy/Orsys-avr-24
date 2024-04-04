import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionServersService {
  allServers = [
    {
      id: 1,
      nom: 'Donald Server',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Jean Server',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Nada Server',
      statut: 'online',
    },
  ];

  getServerById(id) {
    return this.allServers.find((serv) => serv.id == id);
  }

  constructor() {}
}
