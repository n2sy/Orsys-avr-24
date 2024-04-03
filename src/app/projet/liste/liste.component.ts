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
    this.allCandidats = this.candSer.getAllCandidats();
  }

  sendCandToCv(cand) {
    this.listeEvent.emit(cand);
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}
