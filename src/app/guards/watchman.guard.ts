import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Make sure the path is correct
import { Router } from '@angular/router';

export const watchmanGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user has the 'watchman' role
  if (authService.isWatchman()) {
    return true; // Allow access if the user is a watchman
  } else {
    // Redirect to login or another page if the user is not a watchman
    router.navigate(['/login']);
    return false;
  }
};
