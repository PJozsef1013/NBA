import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';
import { Player } from 'src/app/shared/interfaces/player';
import { Team } from 'src/app/shared/interfaces/team';

@Component({
  selector: 'app-bucks',
  templateUrl: './bucks.component.html',
  styleUrls: ['./bucks.component.scss']
})
export class BucksComponent implements OnInit {
  roster: Player[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getTeam();
  }
  filterPlayerByName(name: string) {
    const roster = this.roster.filter((player: Player) => player.playerDatas.playerName === name);
    if (roster.length > 0) {
      this.roster = roster;
    }
  }

  resetFilter() {
    this.getTeam();
  }

  private getTeam() {
    this.apiService.getTeam('2').subscribe(
      (team: Team) => (this.roster = team.roster),
      (error) => {},
      () => {}
    );
  }
}
