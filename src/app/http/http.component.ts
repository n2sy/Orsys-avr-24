import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrl: './http.component.css',
})
export class HttpComponent {
  obs$: Observable<Object[]>;
  constructor(private http: HttpClient) {}

  ngOnInit() {
    // V1
    // this.http.get('https://jsonplaceholder.typicode.com/users').subscribe({
    //   next: (data) => {
    //     console.log(data);
    //   },
    //   error: (err) => {
    //     console.log('aaaaaa', err);
    //   },
    //   complete: () => {
    //     console.log('Flux fermé !');
    //   },
    // });

    //V2
    this.obs$ = this.http.get<Object[]>(
      'https://jsonplaceholder.typicode.com/users'
    );
  }
}
