import { Component } from '@angular/core';
import { Candidat } from '../../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'homer', 'simpson', 'chef de projet', 53, 'homer.png'),
    new Candidat(2, 'bart', 'simpson', 'ingénieur', 28, 'bart.jpeg'),
    new Candidat(3, 'lisa', 'simpson', 'designer', 23, 'lisa.png'),
    new Candidat(4, 'nidhal', 'jelassi', 'trainer', 40),
  ];
  selectedCandidat: Candidat;

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }
}
