import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Router} from "@angular/router";
import {LoginService} from "./login.service";
import {AppComponent} from "../app.component";


@Injectable()
export class ErrorInterceptor extends AppComponent implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 400) {
        this.createNotification('error', 'Error '+err.status, JSON.stringify(err));
      }
      else if (err.status === 401) {
        // auto logout if 401 response returned from api
        this.loginService.logout();
        location.reload(true);
      }
      else if (err.status === 404) {
        this.router.navigateByUrl("/");
      }
      else {
        this.router.navigateByUrl("/");
      }

      console.log(JSON.stringify(err));

      const error = err.error.message || err.statusText;
      return throwError(error);
    }))
  }
}
