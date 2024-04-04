import { Component } from '@angular/core';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  constructor(
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ajouterCandidat(newCand) {
    this.candSer.addCandidat(newCand);
    this.router.navigateByUrl('/cv');
  }
}
