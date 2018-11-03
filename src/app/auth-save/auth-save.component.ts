import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-auth-save',
  templateUrl: './auth-save.component.html',
  styleUrls: ['./auth-save.component.css']
})

@Injectable()
export class AuthSaveComponent implements CanActivate {

  constructor(private router: Router, public auth: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('currentUser')) {
      this.auth.authenticated = true;
      this.auth.userCurrent = JSON.parse(localStorage.getItem('currentUser'));

      console.log("user save: ", this.auth.userCurrent)

      console.log("user save name: ", this.auth.userCurrent.name)
      this.auth.username_get = this.auth.userCurrent.name;
      //console.log(this.auth.authenticated)
        // logged in so return true
        return true;
        
    }

            // not logged in so redirect to login page with the return url
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;
        }

        

        
}
