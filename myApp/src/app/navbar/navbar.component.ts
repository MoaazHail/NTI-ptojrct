import { Router } from '@angular/router';
import { AuthService } from './../Service/auth.service';
import { Component } from '@angular/core';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

constructor(private _auth:AuthService, private _router:Router){}
  logOut() {
    this._auth.logOut(); // Log the user out
    this._router.navigate(['/login']); // Redirect to login page
  }
}
