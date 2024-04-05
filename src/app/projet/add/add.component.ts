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
}
