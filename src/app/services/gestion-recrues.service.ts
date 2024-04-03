import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionRecruesService {
  private allRecrues: Candidat[] = [];

  getAllRecrues() {
    return this.allRecrues;
  }

  addRecrue(newRecrue) {
    if (this.allRecrues.includes(newRecrue))
      alert('Ce candidat a déjà été recruté!');
    else this.allRecrues.push(newRecrue);
  }

  constructor() {}
}
