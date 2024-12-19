import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:3000/account';
  private hi = 'http://localhost:3000/employees';
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}


  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  loggin(){
    this.isAuthenticated = true;
  }

  senddata(data: any) {
    return this.http.post<any>(this.hi,data);
  }

  getAccounts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getemployees(): Observable<any[]> {
    return this.http.get<any[]>(this.hi);
  }
  getid(id:any)
  {
    return this.http.get(`http://localhost:3000/employees/${id}`);
  }
  deleteEmployee(id :any ) {
    return this.http.delete<any>(`http://localhost:3000/employees/${id}`);
  }
  updatedata(id :any , data: any) {
    return this.http.put<any>(`http://localhost:3000/employees/${id}`,data);
  }
}
