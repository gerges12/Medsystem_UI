import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class MenuComponent {

  profileSubmenu = false;
  claimsSubmenu = false;
  policiesSubmenu = false;
  supportSubmenu = false;

  username: string = 'اسم المستخدم'; // يمكنك تعديل هذا لجعل الاسم ديناميكيًا
  constructor(private router: Router) {}

  // دالة للتنقل بين الصفحات
  toggleSubmenu(submenu: string) {
    switch (submenu) {
      case 'profileSubmenu':
        this.profileSubmenu = !this.profileSubmenu;
        break;
      case 'claimsSubmenu':
        this.claimsSubmenu = !this.claimsSubmenu;
        break;
      case 'policiesSubmenu':
        this.policiesSubmenu = !this.policiesSubmenu;
        break;
      case 'supportSubmenu':
        this.supportSubmenu = !this.supportSubmenu;
        break;
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

 

}
