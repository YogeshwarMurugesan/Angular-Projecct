import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { formDataModel } from '../views/register/register.component';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private APIURL = "http://localhost:3000/register";

  constructor(private http:HttpClient, ) {

   }

   postData(registerData : formDataModel):Observable<any>{
      return this.http.post<any>(this.APIURL,registerData )
   }
}
