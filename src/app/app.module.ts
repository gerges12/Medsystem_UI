import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service'; // Adjust the path as needed
import { MessageService } from 'primeng/api'; // For PrimeNG message handling
import { RouterModule } from '@angular/router'; // For routing
import { LoginComponent } from './components/login/login.component'; // Adjust path for LoginComponent
import { HomeComponent } from './components/home/home.component'; // Example component
import { RegisterComponent } from './components/register/register.component'; // Example component
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Needed for PrimeNG animations
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast'; // Import for p-toast
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import for ngModel and ngForm
import { HttpClientModule } from '@angular/common/http';
import { PreApprovalRequestComponent } from './features/pre-approval-request/pre-approval-request.component';
import { AppRoutingModule } from './app-routing.module'; // Keep your routing module
import { MainLayoutComponent } from './core/template/main-layout/main-layout.component'; // استيراد MainLayoutComponent
import { MenuComponent } from './core/template/main-layout/app-menu/app-menu.component';
import { HeaderComponent } from './core/template/main-layout/app-header/app-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,

    MenuComponent, // إضافة MenuComponent
    HeaderComponent, // إضافة HeaderComponent
    LoginComponent, // تأكد من إضافة LoginComponent
    HomeComponent, // Add other components here
    RegisterComponent, // Add your other components here
    PreApprovalRequestComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Necessary for PrimeNG components
    AppRoutingModule, // Your routing module
  RouterModule,  
    HttpClientModule,
    FormsModule,     // إضافة FormsModule لدعم ngModel و ngForm
    ReactiveFormsModule, // إضافة ReactiveFormsModule
    ButtonModule,   // إضافة ButtonModule
    CardModule,     // إضافة CardModule
    InputTextModule, // إضافة InputTextModule
    PasswordModule,  // إضافة PasswordModule
    ToastModule,     // إضافة ToastModule
    AppRoutingModule // استخدام AppRoutingModule هنا
  ],
  providers: [AuthService, MessageService], // Provide services here
  bootstrap: [AppComponent]
})
export class AppModule { }
