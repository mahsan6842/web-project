import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';  // Import Router to navigate
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,

  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onSubmit(): void {
    // Check if both username and password are entered
    if (!this.username || !this.password) {
      alert('Please enter both username and password');
      return;
    }

    // Call the login service
    this.loginService.login(this.username, this.password).subscribe({
      next: (response) => {
        // If login is successful, authenticate the user
        this.loginService.authenticate();
        alert('Login successful!');

        // Navigate to the dashboard after successful login
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        console.error('Error during login:', err);
        // If there's an error, show an error alert
        alert('Invalid credentials or something went wrong!');
      }
    });
  }
}
