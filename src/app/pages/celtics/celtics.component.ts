import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Player } from 'src/app/shared/interfaces/player';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-celtics',
  templateUrl: './celtics.component.html',
  styleUrls: ['./celtics.component.scss']
})
export class CelticsComponent implements OnInit {
  roster: Player[] = [];

  constructor(private apiservice: ApiService) {}

  ngOnInit(): void {
    this.apiservice.getTeam('5').subscribe(
      (team: Team) => (this.roster = team.roster),
      (error) => {},
      () => {}
    );
  }
}
