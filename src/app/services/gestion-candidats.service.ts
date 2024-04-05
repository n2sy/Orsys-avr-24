import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link = 'http://localhost:3000/cv/persons';
  private allCandidats: Candidat[] = [
    new Candidat(1, 'homer', 'simpson', 'chef de projet', 53, 'homer.png'),
    new Candidat(2, 'bart', 'simpson', 'ingénieur', 28, 'bart.jpeg'),
    new Candidat(3, 'lisa', 'simpson', 'designer', 23, 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 'trainer', 40),
  ];

  getAllCandidats() {
    return this.allCandidats;
  }

  getAllCandidatsAPI() {
    return this.http.get(this.link);
  }

  getCandidatById(id) {
    return this.allCandidats.find((cand) => cand._id == id);
  }

  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  constructor(private http: HttpClient) {}

  uploadAvatar(formData) {
    return this.http.post('http://localhost:3000/images/upload', formData);
  }

  addCandidatAPI(cand) {
    // let token = localStorage.getItem('access_token');
    // if (token) {
    //   let h = new HttpHeaders().set('Authorization', `bearer ${token}`);
    //   return this.http.post(`${this.link}`, cand, { headers: h });
    // }
    return this.http.post(`${this.link}`, cand);
  }

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
  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/${uCand._id}`, uCand);
  }

  deleteCandidat(id) {
    let i = this.allCandidats.findIndex((cand) => cand._id == id);
    this.allCandidats.splice(i, 1);
  }
  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/${id}`);
  }
}
