import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loggedState: boolean = false;
  constructor(
    public cartService: CartService,
    private authService: AuthService
  ) {}
  login() {
    this.authService.logIn();
  }
  logout() {
    this.authService.logOut();
  }
  ngOnInit(): void {
    this.authService.isLogged$.subscribe((isloggedIn: boolean) => {
      this.loggedState = isloggedIn;
      console.log('change state ' + isloggedIn);
    });
  }
}
