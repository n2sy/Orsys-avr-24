import { Injectable } from '@angular/core';
import { SecondService } from './second.service';

@Injectable()
export class FirstService {
  constructor(private secondSer: SecondService) {}

  afficherSalut() {
    console.log('Je suis le premier service');
    this.secondSer.showInfos();
  }
}
