import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';
@Component({
  selector: 'app-viewemployee',
  imports: [NgForOf, RouterLink],
  templateUrl: './viewemployee.component.html',
  standalone: true,
  styleUrl: './viewemployee.component.css'
})
export class ViewemployeeComponent implements OnInit {
  employees: any[] = [];

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    this.fetchEmployees();
  }

  fetchEmployees(): void {
    this.loginService.getemployees().subscribe(
      (data) => {
        this.employees = data;
        console.log("Employees fetched successfully:", this.employees);
      },
      (error) => {
        console.log("Error fetching employees:", error);
      }
    );
  }

  deleteEmployee(id: any): void {
    this.loginService.deleteEmployee(id).subscribe(
      () => {
        console.log("Employee deleted successfully");
        this.employees = this.employees.filter((employee) => employee.id !== id);
      },
      (error) => {
        console.log("Error deleting employee:", error);
      }
    );
  }
}
