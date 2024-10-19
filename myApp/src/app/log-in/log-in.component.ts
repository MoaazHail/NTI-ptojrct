import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  constructor(private _router:Router, private _auth:AuthService){}
loginForm : FormGroup = new FormGroup({
  email:new FormControl(''),
  password:new FormControl('')
}) 

login(){
  const {email,password} = this.loginForm.value;
  
  this._auth.login(email,password).subscribe({
    next: ()=> this._router.navigate(['/dashboard']),
    error: err=> console.log(err)
  })
}
}
