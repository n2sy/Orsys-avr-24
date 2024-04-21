import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';
import { Candidat } from '../../models/candidat';
import { MessageService } from 'primeng/api';

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
    private router: Router,
    private messageSer: MessageService
  ) {}

  ngOnInit() {
    // 1ere méthode
    //console.log(this.activatedRoute.snapshot.params['id']);
    //this.id = this.activatedRoute.snapshot.paramMap.get('id');

    //2eme méthode
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (res: Candidat) => {
            this.targetCandidat = res;
          },
          error: (err) => {
            this.messageSer.add({
              severity: 'warn',
              summary: 'Search',
              detail: 'No candidate with such id',
            });
            this.router.navigateByUrl('/not-found');
          },
        });
      },
    });
  }

  deleteHandler() {
    if (confirm('Etes vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.targetCandidat._id).subscribe({
        next: (res) => {
          this.messageSer.add({
            severity: 'info',
            summary: 'Delete',
            detail: res['message'],
          });
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          console.log('Erreur avec DeleteCand');
        },
      });
    }
  }
}
