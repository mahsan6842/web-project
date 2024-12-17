import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/api/admin/login'; // API endpoint
  private isAuthenticated = false;  // Track the authentication state

  constructor(private http: HttpClient) {}

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Login method to send username and password
  login(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }

  // Method to set the login state to authenticated
  authenticate() {
    this.isAuthenticated = true;
  }

  // Method to logout and reset the authentication state
  logout() {
    this.isAuthenticated = false;
  }
}
