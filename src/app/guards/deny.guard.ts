import { CanActivateFn } from '@angular/router';

export const denyGuard: CanActivateFn = (route, state) => {
  let token = localStorage.getItem('access_token');
  if (token) return false;
  return true;
};
