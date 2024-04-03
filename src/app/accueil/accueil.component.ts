import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  constructor(private router: Router) {}
  goToAccounts() {
    this.router.navigateByUrl('accounts');
  }

  goToCv() {
    this.router.navigate(['cv']);
  }
}
