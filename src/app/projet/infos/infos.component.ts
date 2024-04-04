import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';
import { Candidat } from '../../models/candidat';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  targetCandidat: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    // 1ere méthode
    //console.log(this.activatedRoute.snapshot.params['id']);
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');

    //2eme méthode
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.targetCandidat = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }

  deleteHandler() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.targetCandidat._id);
      this.router.navigateByUrl('/cv');
    }
  }
}
