import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  defautLangage = 'php';
  myComment = "Je m'amuse avec Klee Group...";
  showSignUp = false;
  submitHandler(f: NgForm) {
    console.log(f.value);
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
