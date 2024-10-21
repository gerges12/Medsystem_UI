import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JwtTokenService } from '../services/jwt-token.service'; // Adjust the path as necessary
import { Router } from '@angular/router';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(private jwtTokenService: JwtTokenService, private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError(error => this.handleGeneralErrors(error))
    );
  }

  private handleGeneralErrors(err: HttpErrorResponse): Observable<any> {
    if (err.status === 500) { // Backend Error
      console.log(err);
      return throwError(err);
    } else if (err.status === 401 || err.status === 403) { // Authentication/Authorization Error
      console.log(err);
      this.jwtTokenService.destroyToken();
      this.router.navigate(['/login']); // Redirect to login
      return throwError(err);
    } else { // Other Errors
      console.log(err);
      return throwError(err);
    }

    return EMPTY;
  }
}
