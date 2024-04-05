import { Component, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../../models/candidat';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  //providers: [GestionRecruesService],
})
export class ListeComponent {
  allCandidats: Candidat[] = [];
  @Output() listeEvent = new EventEmitter();

  constructor(private candSer: GestionCandidatsService) {}

  ngOnInit() {
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (data: Candidat[]) => {
        this.allCandidats = data;
      },
      error: (err) => {
        alert('Fake DATA !');
        this.allCandidats = this.candSer.getAllCandidats();
        console.log('Erreur avec getAllCandidats');
      },
    });
  }

  sendCandToCv(cand) {
    this.listeEvent.emit(cand);
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}
