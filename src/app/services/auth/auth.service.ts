import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AppConstantsService } from '../app-constants.service';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private constants: AppConstantsService) { }

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false)
  });

  clearForm() {
    this.form.reset();
  }

  login(): Observable<any> {
    return this.httpClient.post<any>(
      this.constants.getApiUrl('login'),
      this.form.value,
      { headers: this.constants.getApiHeaders() }
    ).pipe(
      map((result) => {
        this.constants.setAccessToken(result.access_token);
        return result;
      })
    );
  }

  getProfile() {
    return this.httpClient
      .get<any>(
        this.constants.getApiUrl('profile'),
        { headers: this.constants.getApiHeaders() }
      ).pipe(
        map((result) => {
          this.constants.setCurrentUser(result.data);
          return result;
        })
      );
  }

  logout() {
    return this.httpClient
      .get<any>(
        this.constants.getApiUrl('logout'),
        { headers: this.constants.getApiHeaders() }
      );
  }
}
