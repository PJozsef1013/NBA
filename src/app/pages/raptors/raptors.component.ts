import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/shared/interfaces/player';
import { Team } from 'src/app/shared/interfaces/team';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-raptors',
  templateUrl: './raptors.component.html',
  styleUrls: ['./raptors.component.scss']
})
export class RaptorsComponent implements OnInit {
  roster: Player[] = [];

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.apiservice.getTeam('4').subscribe(
      (team: Team) => (this.roster = team.roster),
      (error) => {},
      () => {}
    );
  }
}
