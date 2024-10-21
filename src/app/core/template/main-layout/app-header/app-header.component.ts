import { Component , Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { LoginEmployee } from '../../../../interfaces/login-employee';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class HeaderComponent {


  requester: LoginEmployee;

  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,

    private router: Router ,     private authService: AuthService,
    ) {}

    ngOnInit(): void {

      this.requester = this.storage.get("loginEmployee");

    }

  

  navigateTo(route: string) {
    this.router.navigate([route]);
  }



  logout(): void {

    this.authService.logout()  ;
    this.router.navigate(['/login']);
  }
}
