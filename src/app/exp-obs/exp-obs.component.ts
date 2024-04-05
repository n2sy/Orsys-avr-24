import { Component } from '@angular/core';
import { Observable, Observer, Subscription, map, throttleTime } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css',
})
export class ExpObsComponent {
  inscription: Subscription;
  myObs2$: Observable<number> = new Observable((obsever: Observer<number>) => {
    let count = 0;
    setInterval(() => {
      count++;
      obsever.next(count);
    }, 1000);
  }).pipe(
    map((val) => val * 100),
    //skip(5)
    throttleTime(3000)
  );
  // myObs$: Observable<string> = new Observable((obsever: Observer<string>) => {
  //   setTimeout(() => {
  //     obsever.next('First Package');
  //   }, 2000);
  //   setTimeout(() => {
  //     obsever.next('Second Package');
  //   }, 4000);
  //   // setTimeout(() => {
  //   //   obsever.error(new Error('erreur provoqué'));
  //   // }, 6000);
  //   setTimeout(() => {
  //     obsever.next('Third Package');
  //   }, 8000);
  //   setTimeout(() => {
  //     obsever.complete();
  //   }, 10000);
  //   setTimeout(() => {
  //     obsever.next('Last Package');
  //   }, 12000);
  // });

  ngOnInit() {
    this.inscription = this.myObs2$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('Erreur détectée', err);
      },
      complete: () => {
        console.log('Merci et au revoir !');
      },
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
