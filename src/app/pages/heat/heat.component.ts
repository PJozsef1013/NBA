import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Player } from 'src/app/shared/interfaces/player';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-heat',
  templateUrl: './heat.component.html',
  styleUrls: ['./heat.component.scss']
})
export class HeatComponent implements OnInit {
  roster: Player[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getTeam('1').subscribe(
      (team: Team) => (this.roster = team.roster),
      (error) => {},
      () => {}
    );
  }
}
