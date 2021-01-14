import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/interfaces/player';
import { roster } from 'src/app/shared/mock-datas/toronto-raptors';

@Component({
  selector: 'app-raptors',
  templateUrl: './raptors.component.html',
  styleUrls: ['./raptors.component.scss']
})
export class RaptorsComponent implements OnInit {
  roster: Player[] = [];

  constructor() {}

  ngOnInit(): void {
    this.roster = roster;
  }
}
