import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import decode from 'jwt-decode';
import {AuthGuard} from "./auth.guard";

@Injectable()
export class RoleGuardService implements CanActivate {
  constructor(public auth: AuthGuard, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    // this will be passed from the route config
    // on the data property
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem('access_token');
    try {
      // decode the token to get its payload
      const tokenPayload = decode(token);
      if (
        !this.auth.canActivate() ||
        tokenPayload.role !== expectedRole
      ) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
    }
    catch (e) {
      this.router.navigate(['login']);
      return false;
    }
  }
}
