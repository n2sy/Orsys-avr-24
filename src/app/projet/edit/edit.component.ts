import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../../models/candidat';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  targetCandidat: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router,
    private messageSer: MessageService
  ) {}

  ngOnInit() {
    this.candSer
      .getCandidatByIdAPI(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (res: Candidat) => {
          this.targetCandidat = res;
        },
        error: (err) => {
          console.log('Erreur avec getById');
        },
      });
  }

  editerCandidat(candidatEdite) {
    candidatEdite._id = this.targetCandidat._id;
    candidatEdite.avatar = this.targetCandidat.avatar;
    this.candSer.updateCandidatAPI(candidatEdite).subscribe({
      next: (res) => {
        this.messageSer.add({
          severity: 'success',
          summary: 'Success',
          detail: res['message'],
        });
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        this.messageSer.add({
          severity: 'error',
          summary: 'Error',
          detail: "Vous n'avez pas les autorisations nécessaires",
        });
      },
    });
  }
}
