import { Component } from '@angular/core';
import {LoginService} from '../login.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-deleteemployee',
  imports: [
    FormsModule
  ],
  templateUrl: './deleteemployee.component.html',
  standalone: true,
  styleUrl: './deleteemployee.component.css'
})
export class DeleteemployeeComponent {
  constructor(private loginService: LoginService){}
  id:any;

  onsubmit(event: Event) {
    event.preventDefault(); // Prevent default form submission
    this.loginService.deleteEmployee(this.id).subscribe(
      () => {
        console.log("Employee deleted successfully");
      },
      (error) => {
        console.log("Error deleting employee:", error);
      }
    );
  }


}
