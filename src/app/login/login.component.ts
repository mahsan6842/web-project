import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';  // Import Router to navigate
import { FormsModule } from '@angular/forms';


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

      this.loginService.getAccounts().subscribe(
        (accounts) => {
          const user = accounts.find(
            (account) => account.username === this.username && account.password === this.password
          );

          if (user) {

            alert('Congratulations! You have logged in successfully!');
            this.loginService.loggin();
            this.router.navigate(['/']);
          } else {
            alert('Invalid email or password!');
          }
        },
        (error) => {

        }
      );

  }
}
