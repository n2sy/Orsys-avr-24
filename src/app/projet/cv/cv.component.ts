import { Component, inject } from '@angular/core';
import { Candidat } from '../../models/candidat';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';
import { FirstService } from '../../services/first.service';
import { GestionRecruesService } from '../../services/gestion-recrues.service';
import { StandComponent } from '../../stand/stand.component';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidat: Candidat;

  constructor(private firstSer: FirstService) {}
  candSer = inject(GestionCandidatsService);

  ngOnInit() {
    this.tabCandidats = this.candSer.getAllCandidats();
    this.firstSer.afficherSalut();
  }

  recupererCandidat(cand) {
    this.selectedCandidat = cand;
  }

  addNewCandidat() {
    //this.candSer.addCandidat();
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}
