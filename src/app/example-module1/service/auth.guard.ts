// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';

import { LoginserviceService } from './loginservice.service';
 // Import your authentication service



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginserviceService, private router: Router, ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true; // User is authenticated, allow access to the route
    }

    else {
      this.router.navigate(['/login']); // User is not authenticated, redirect to the login page
      return false;
    }
  }





}
