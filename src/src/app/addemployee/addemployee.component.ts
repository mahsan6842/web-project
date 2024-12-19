import { Component } from '@angular/core';
import {LoginService} from '../login.service';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-addemployee',
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './addemployee.component.html',
  standalone: true,
  styleUrl: './addemployee.component.css'
})
export class AddemployeeComponent {

  constructor(private loginService: LoginService){}


  emp = {
    name: '',
    email:'',
    position: ''
  }

  isSubmitted = false;

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Employee Data:', this.emp);
      this.isSubmitted = true;
      this.loginService.senddata(this.emp).subscribe(
        (data) => {
          console.log("data sent success");
        },
        (error) => {
          console.log("data sent failed");
        });{ }

      // Hide success message after 3 seconds
      setTimeout(() => {
        this.isSubmitted = false;
        form.resetForm();
      }, 3000);
    }
  }
}
