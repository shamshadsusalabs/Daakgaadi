import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  private isAuthenticated: boolean = false;

  login1(email: string, password: string): boolean {
    if (email === 'admin@gmail.com' && password === 'admin123') {
      this.isAuthenticated = true;
      return true;
    }


    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
