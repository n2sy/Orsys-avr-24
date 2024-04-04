import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidat } from '../../models/candidat';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';

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
    private router: Router
  ) {}

  ngOnInit() {
    this.targetCandidat = this.candSer.getCandidatById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  editerCandidat(candidatEdite) {
    candidatEdite._id = this.targetCandidat._id;
    candidatEdite.avatar = this.targetCandidat.avatar;
    this.candSer.updateCandidat(candidatEdite);
    this.router.navigateByUrl('/cv');
  }
}
