import { Component } from '@angular/core';
import {LoginService} from '../login.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editemployee',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './editemployee.component.html',
  standalone: true,
  styleUrl: './editemployee.component.css'
})
export class EditemployeeComponent {
  emp = {
    id:'',
    name: '',
    email:'',
    position: ''
  }
  public blog !: any;
  constructor(private loginService: LoginService,private route: ActivatedRoute ) {}
  ngOnInit(): void {

    // Fetch blog data and populate the edit object
    this.loginService.getid(this.route.snapshot.paramMap.get('id')).subscribe(
      (data) => {
        this.blog = data;
        this.emp = {
          id: this.blog.id,
          name: this.blog.name,
          email: this.blog.email,
          position: this.blog.position,
        };
      },
      (err) => {
        console.log("Retrieve failed", err);
      }
    );
  }




  isSubmitted = false;

  onSubmit(form: any): void {
    if (form.valid) {
      console.log('Post Data:', this.emp);
      this.isSubmitted = true;
      this.loginService.updatedata(this.emp.id,this.emp).subscribe(
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
