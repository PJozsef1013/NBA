import { Component, OnInit } from '@angular/core';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  readonly faBasketball = faBasketballBall;

  navBarIsOpen: boolean;

  constructor() {}

  changeNavbarState() {
    this.navBarIsOpen = !this.navBarIsOpen;
    localStorage.setItem('navbarisopen', `${this.navBarIsOpen}`);
  }
  ngOnInit(): void {
    const isOpen = localStorage.getItem('navbarisopen');
    if (isOpen === 'true') {
      this.navBarIsOpen = true;
    } else {
      this.navBarIsOpen = false;
    }
  }
}
