import { CanDeactivateFn } from '@angular/router';

export const navigationGuard: CanDeactivateFn<unknown> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  let token = localStorage.getItem('access_token');
  if (token) return true;
  return false;
};
