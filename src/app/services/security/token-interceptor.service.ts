import {Injectable, Injector} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {LoginService} from "../login.service";

@Injectable({
  providedIn: 'root'
})

export class TokenInteceptorService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let loginService=this.injector.get(LoginService);
    let tokenizedReq = req.clone({
      //setHeaders: {Authorization: `Bearer ${loginService.getAccessToken()}`}
    })
    return next.handle(tokenizedReq);
  }

  constructor(private injector: Injector) {
  }

}
