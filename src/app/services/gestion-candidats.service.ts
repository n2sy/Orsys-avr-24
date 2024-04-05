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

  addCandidat(newCand) {
    newCand._id = this.allCandidats[this.allCandidats.length - 1]._id + 1;
    // let cand = new Candidat(
    //   this.allCandidats[this.allCandidats.length - 1]._id + 1,
    //   newCand.prenom,
    //   newCand.nom,
    //   newCand.profession,
    //   newCand.age,
    //   newCand.avatar
    // );
    // console.log(cand instanceof Candidat);

    this.allCandidats.push(newCand);
  }

  updateCandidat(uCand) {
    let i = this.allCandidats.findIndex((cand) => cand._id == uCand._id);
    this.allCandidats[i] = uCand;
  }

  deleteCandidat(id) {
    let i = this.allCandidats.findIndex((cand) => cand._id == id);
    this.allCandidats.splice(i, 1);
  }
}
