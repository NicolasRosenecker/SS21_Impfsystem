import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from './shared/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CanNavigateToAdminGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.authService.isLoggedIn() && this.authService.isAdmin())
      return true;
    else{
      window.alert("Sie besitzen nicht die benötigten Administrationsrechte.");
      this.router.navigate(["../"], { relativeTo: this.route});
      return false;
    }


  }

}
