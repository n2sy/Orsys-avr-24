import { Component } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-recrues',
  templateUrl: './recrues.component.html',
  styleUrl: './recrues.component.css',
})
export class RecruesComponent {
  tab: Candidat[] = [];
  constructor(private recSer: GestionRecruesService) {}

  ngOnInit() {
    this.tab = this.recSer.getAllRecrues();
  }
}
