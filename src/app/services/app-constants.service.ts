import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import { environment } from 'src/enviroments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

  showMenus = false;
  currentUser: Usuario | null;
  private accessToken: string;
  private roles!: object | null;

  constructor() {
    let token = localStorage.getItem('ApiAccessToken');
    this.accessToken = (token != null) ? token : "";

    let userString = localStorage.getItem('CurrentUser')
    this.currentUser = (userString != null) ? JSON.parse(userString) : null;
  }

  getApiUrl(module?: string): string {
    return (module == null) ? environment.apiUrl : environment.apiUrl + module;
  }

  getApiHeaders(): HttpHeaders {
    if (this.accessToken == null) {
      return new HttpHeaders({
        "Content-Type": "application/json",
        "Accept": "application/json"
      });
    } else {
      return new HttpHeaders({
        "Authorization": "Bearer " + this.accessToken,
        "Content-Type": "application/json",
        "Accept": "application/json"
      });
    }
  }

  setAccessToken(token: string): void {
    localStorage.setItem("ApiAccessToken", token);
    this.accessToken = token;
  }

  setCurrentUser(user: Usuario): void {
    const userString = JSON.stringify(user);
    localStorage.setItem("CurrentUser", userString);
    this.currentUser = user;
  }

  getRoles(): object | null {
    return this.roles;
  }

  clearData() {
    this.showMenus = false;
    localStorage.removeItem("ApiAccessToken");
    this.accessToken = "";
    localStorage.removeItem("CurrentUser");
    this.currentUser = null;
    this.roles = null;
  }
}
