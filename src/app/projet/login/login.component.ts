import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defautLangage = 'php';
  myComment = "Je m'amuse avec Klee Group...";
  showSignUp = true;
  showError = false;
  constructor(private authSer: AuthService, private router: Router) {}
  submitHandler(f: NgForm) {
    console.log(f.value);
  }

  register(f) {
    this.authSer.inscription(f.value).subscribe({
      next: (res) => {
        alert(res['message']);
        this.showSignUp = false;
        f.reset();
      },
      error: (err) => {
        console.log('Erreur avec Register');
      },
    });
  }

  login(f) {
    this.authSer.seConnecter(f.value).subscribe({
      next: (res) => {
        console.log(res);
        alert(res['message']);
        localStorage.setItem('access_token', res['token']);
        this.router.navigateByUrl('/');
      },
      error: (err) => {
        this.showError = true;
        f.reset();
      },
    });
  }

  generatePwd(f: NgForm) {
    f.setValue({
      exemple: '',
      login: '',
      password: Math.random(),
      langage: '',
      commentaire: '',
    });
  }
  generatePwd2(f: NgForm) {
    f.form.patchValue({
      password: Math.random(),
    });
  }

  switchSignUpButton() {
    this.showSignUp = !this.showSignUp;
  }
}
