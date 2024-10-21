import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PreApprovalRequestComponent } from './features/pre-approval-request/pre-approval-request.component';
import { LoginComponent } from './components/login/login.component';
import { MainLayoutComponent } from './core/template/main-layout/main-layout.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  {
    path: '',
    component: MainLayoutComponent, // Main layout wrapper
    children: [
      { path: 'home', component: HomeComponent }, // Child routes under the layout
      { path: 'pre-approval-request', component: PreApprovalRequestComponent },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
