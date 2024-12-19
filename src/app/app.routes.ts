import { Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { DeleteemployeeComponent } from './deleteemployee/deleteemployee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';  // Import the AuthGuard

export const routes: Routes = [
  { path: 'addemployee', component: AddemployeeComponent, canActivate: [AuthGuardService] },
  { path: 'deleteemployee', component: DeleteemployeeComponent, canActivate: [AuthGuardService] },
  { path: 'editemployee/:id', component: EditemployeeComponent, canActivate: [AuthGuardService] },
  { path: 'viewemployee', component: ViewemployeeComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
];
