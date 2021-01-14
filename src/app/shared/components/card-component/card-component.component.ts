import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../../interfaces/player';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  @Input() roster: Player[];

  constructor() {}

  ngOnInit(): void {}
}
