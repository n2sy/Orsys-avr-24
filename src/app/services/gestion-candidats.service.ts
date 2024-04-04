import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private allCandidats: Candidat[] = [
    new Candidat(1, 'homer', 'simpson', 'chef de projet', 53, 'homer.png'),
    new Candidat(2, 'bart', 'simpson', 'ingénieur', 28, 'bart.jpeg'),
    new Candidat(3, 'lisa', 'simpson', 'designer', 23, 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 'trainer', 40),
  ];

  getAllCandidats() {
    return this.allCandidats;
  }

  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand._id == id);
  }

  constructor() {}

  addCandidat() {
    this.allCandidats.push(
      new Candidat(3, 'New', 'Candidat', 'designer', 23, 'lisa.png')
    );
  }
}
