import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Player } from 'src/app/shared/interfaces/player';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-bulls',
  templateUrl: './bulls.component.html',
  styleUrls: ['./bulls.component.scss']
})
export class BullsComponent implements OnInit {
  roster: Player[] = [];

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.apiservice.getTeam('3').subscribe(
      (team: Team) => (this.roster = team.roster),
      (error) => {},
      () => {}
    );
  }
}
