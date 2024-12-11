import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{AddNewEmployeeComponent} from './add-new-employee/add-new-employee.component';
import{RemoveEmployeeComponent} from './remove-employee/remove-employee.component';
import {HeaderComponent} from './header/header.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf,AddNewEmployeeComponent,RemoveEmployeeComponent,HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'untitled5';
}
