import { Component, OnInit } from '@angular/core';
import { faBasketballBall } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  readonly faBasketball = faBasketballBall;

  navBarIsOpen = true;

  constructor() {}

  ngOnInit(): void {}
}
