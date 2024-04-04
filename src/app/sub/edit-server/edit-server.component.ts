import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent {
  selectedServer;
  constructor(
    private activatedRoute: ActivatedRoute,
    private serService: GestionServersService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedServer = this.serService.getServerById(p.get('id'));
      },
    });
  }
}
