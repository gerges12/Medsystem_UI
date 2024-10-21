import { Injectable , Inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators'; // إضافة finalize هنا
import { environment } from '../../environments/environment'; // تعديل المسار حسب الحاجة
import { JwtTokenService } from './jwt-token.service';
import { LoginRequest } from '../interfaces/login-request';
import { AuthenticationResponse } from '../interfaces/AuthenticationResponse';
import { RegisterPostData } from '../interfaces/register-post';
import { LoadingService } from './common/loading.service';
import { LOCAL_STORAGE, WebStorageService } from 'ngx-webstorage-service';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}auth/signin`;   

 


  constructor(
    @Inject(LOCAL_STORAGE) private storage: WebStorageService,

    private httpClient: HttpClient,
    private jwtTokenService: JwtTokenService,
    private loadingService: LoadingService
  ) {}

  logout() {

    this.storage.set('loginEmployee', null);

    this.jwtTokenService.destroyToken(); 
  }

  loginUser(request: LoginRequest): Observable<AuthenticationResponse> {
    this.loadingService.startLoader();

    return this.httpClient.post<AuthenticationResponse>(this.apiUrl, request).pipe(  
      map((authenticationResponse: AuthenticationResponse) => {
        const token = authenticationResponse.accessToken || '';
        this.jwtTokenService.saveToken(token); 
        console.log(`Login successful: Token generated`);
        return authenticationResponse;
      }),
      finalize(() => {
        this.loadingService.stopLoader();
      })
    );
  }

  registerUser(userData: RegisterPostData): Observable<any> {
    return this.httpClient.post(this.apiUrl, userData); 
  }

  saveToken(token: string) {
    this.jwtTokenService.saveToken(token);
  }
}
