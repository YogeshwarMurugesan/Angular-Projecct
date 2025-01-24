import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../../Services/login.service';
import { Router } from '@angular/router';

export class loginModel {
  emailOrNumber = '';
  password = '';
}

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginFormData  : loginModel  = new loginModel()
  constructor(private LoginService : LoginService, private router: Router){}

  onSubmit(FormData:NgForm){
console.log(FormData.value)

if(FormData.valid){
  this.LoginService.postData(FormData.value).subscribe((res)=>{
    console.log('Sucess : ' , res)
    alert(res.message)
  },

(error)=>{
  console.error('Error during subscription:', error);
  alert(error.error.message || 'An unexpected error occurred.');
})

}
  }

  accountCreation(){
    console.log('redirect function')
    this.router.navigate(['/register'])
  }
}
