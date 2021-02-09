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
    this.getTeam();
  }

  filterByPlayerName(name: string) {
    const roster = this.roster.filter((player: Player) => player.playerDatas.playerName === name);
    if (roster.length > 0) {
      this.roster = roster;
    }
  }
  resetFilter() {
    this.getTeam();
  }

  addPlayer() {
    this.getTeam();
  }

  editPlayer() {
    this.getTeam();
  }

  deletePlayer() {
    this.getTeam();
  }

  private getTeam() {
    this.apiService.getTeam('1').subscribe(
      (team: Team) => (this.roster = team.roster),
      (error) => {},
      () => {}
    );
  }
}
