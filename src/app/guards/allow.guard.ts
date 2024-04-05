import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const allowGuard: CanActivateFn = (route, state) => {
  let authSer = inject(AuthService);
  return authSer.estConnecte();
  //return !!localStorage.getItem('access_token');
};
