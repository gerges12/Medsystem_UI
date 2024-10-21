import { Component , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Adjust the path as necessary
import { MessageService } from 'primeng/api'; // PrimeNG message service
import { LoginEmployee } from '../../interfaces/login-employee';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';

import { AuthenticationResponse } from '../../interfaces/AuthenticationResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Adjust if you have specific styles
})
export class LoginComponent {
  login = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,

    private router: Router
  ) {}

  onLogin() {
    this.storage.set('dir', 'rtl');

    // Validate form fields
    if (!this.login.username || !this.login.password) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Please fill in all required fields correctly.',
      });
      return;
    }

    const loginData = {
      username: this.login.username, // Use email as username if required
      password: this.login.password,
    };

    this.authService.loginUser(loginData).subscribe({
      next: (response) => {


        this.setLoginEmployee(response);
        this.router.navigate(['home']); // Redirect to home page after login
      },
      error: (err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err.error?.message || 'Login failed',
        });
      },
    });
  }





  private setLoginEmployee(authenticationResponse: AuthenticationResponse) {
    let loginEmployee: LoginEmployee  = new LoginEmployee();;
    loginEmployee.id = authenticationResponse.id;
    loginEmployee.username = authenticationResponse.username;
    loginEmployee.email = authenticationResponse.email;

   
    this.storage.set('loginEmployee', loginEmployee);
  }




}
