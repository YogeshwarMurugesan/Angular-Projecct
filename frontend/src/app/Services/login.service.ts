import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginModel } from '../views/login/login.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  APIURL = "http://localhost:3000/login"

  constructor( private http:HttpClient) { }

   postData(loginData : loginModel):Observable<any>{
        return this.http.post<any>(this.APIURL,loginData )
     }
}
