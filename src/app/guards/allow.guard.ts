import { CanActivateFn } from '@angular/router';

export const allowGuard: CanActivateFn = (route, state) => {
  return true;
  // let authSer = inject(AuthService);
  // return authSer.estConnecte();
  //return !!localStorage.getItem('access_token');
};
