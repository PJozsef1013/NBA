import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/interfaces/player';
import { roster } from 'src/app/shared/mock-datas/miami-heat';

@Component({
  selector: 'app-heat',
  templateUrl: './heat.component.html',
  styleUrls: ['./heat.component.scss']
})
export class HeatComponent implements OnInit {
  roster: Player[] = [];
  constructor() {}

  ngOnInit(): void {
    this.roster = roster;
    console.log('heat');
  }
}
