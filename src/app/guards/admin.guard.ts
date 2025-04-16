import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';  // Update with the correct path to your AuthService
import { Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Check if the user is an admin
  if (authService.isAdmin()) {
    return true; // Allow access if the user is an admin
  } else {
    // Redirect to login if the user is not an admin
    router.navigate(['/login']);
    return false;
  }
};