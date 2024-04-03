import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css',
})
export class MsWordComponent {
  bg;
  decoration;
  taille;
  police;
  allFonts = ['', 'impact', 'arial', 'phosphate'];

  setSize(newSizeValue) {
    let unite = prompt('Veuillez saisir une unité (cm, %, em, px)');
    this.taille = `${newSizeValue}${unite}`;
  }
}
