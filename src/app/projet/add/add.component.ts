import { Component } from '@angular/core';
import { GestionCandidatsService } from '../../services/gestion-candidats.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  constructor(
    private candSer: GestionCandidatsService,
    private router: Router,
    private messageSer: MessageService
  ) {}

  ajouterCandidat(newCand, e) {
    let formData = new FormData();
    formData.append('avatar', e.target[4].files[0]);
    this.candSer.uploadAvatar(formData).subscribe({
      next: (res) => {
        console.log(res);
        newCand.avatar = res['fileName'];
        this.candSer.addCandidatAPI(newCand).subscribe({
          next: (res) => {
            alert(res['message']);
            this.router.navigateByUrl('/cv');
          },
          error: (err) => {
            console.log('Erreur avec AddCandidat');
          },
        });
      },
      error: (err) => {
        console.log('Erreur avec uploadAvatar');
      },
    });
  }

  ajouterCandidat2(newCand) {
    newCand.avatar = 'bart.jpeg';
    this.candSer.addCandidatAPI(newCand).subscribe({
      next: (res) => {
        this.messageSer.add({
          severity: 'success',
          summary: 'Bravo',
          detail: 'Candidat ajouté avec succès',
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
