import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrl: './info-server.component.css',
})
export class InfoServerComponent {
  selectedServer;
  disableBtn;
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

    this.activatedRoute.queryParamMap.subscribe({
      next: (q: ParamMap) => {
        this.disableBtn = q.get('allowEdit') == '1' ? false : true;
      },
    });
  }
}
