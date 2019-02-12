import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {finalize, map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;
  BASE_URL = 'https://cancer-registry.cmed.com.bd/api/v1/';
/*
    BASE_URL = 'http://localhost:8080/dcrbackend/';
*/

  constructor(private http: HttpClient, private router: Router) {
  }

  loginServer(credentials) {
    return this.http.post<any>('https://cancer-registry.cmed.com.bd/oauth/token?grant_type=password&client_id=android-client&client_secret=android-secret&username='+credentials.username+'&password='+credentials.password, credentials)
      .pipe(map(response => {
        // login successful if there's a jwt token in the response
        if (response['access_token']) {
          this.authenticated = true;
          localStorage.setItem('access_token', response['access_token']);
          localStorage.setItem('role', response['role'][0].name);
          localStorage.setItem('id', response['user_id']);
          location.reload(true);
        }
        else {
          this.authenticated = false;
        }

        return this.authenticated;
      }));
  }

  currentUser() {
    //,{ headers: new HttpHeaders({'Authorization': 'Bearer ' + this.getAccessToken(), 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Credentials': 'true', 'Access-Control-Request-Headers': 'Content-Type, Authorization', 'Accept': 'application/json', 'Content-Type': 'application/json', 'zumo-api-version': '2.0.0'})}
    return this.http.get<any>('https://cancer-registry.cmed.com.bd/api/v1/me')
      .pipe(map(response => {
          localStorage.setItem('currentUser', JSON.stringify(response));
      }));
  }

  logout() {
    this.http.post('logout', {}).pipe(finalize(() => {
      this.authenticated = false;
      localStorage.removeItem('access_token');
      localStorage.removeItem('currentUser');
      localStorage.removeItem('role');
      localStorage.removeItem('id');
      this.router.navigateByUrl('/login');
      location.reload(true);
    })).subscribe();
  }

  isLoggedIn() {
    return !!localStorage.getItem('access_token');
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }
}
