import { Routes } from '@angular/router';
import {AddemployeeComponent} from './addemployee/addemployee.component';
import {DeleteemployeeComponent} from './deleteemployee/deleteemployee.component';
import {EditemployeeComponent} from './editemployee/editemployee.component';
import {ViewemployeeComponent} from './viewemployee/viewemployee.component';

export const routes: Routes = [
  {path:'addemployee',component:AddemployeeComponent},
 {path:'deleteemployee',component:DeleteemployeeComponent},
  {path:'editemployee',component:EditemployeeComponent},
 {path:'viewemployee',component:ViewemployeeComponent},
];
