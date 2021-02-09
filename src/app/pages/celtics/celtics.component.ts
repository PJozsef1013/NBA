import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

  constructor(private chref: ChangeDetectorRef, private apiservice: ApiService) {}

  ngOnInit(): void {
    this.getTeam();
  }

  filteredByName(name: string) {
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
    this.apiservice.getTeam('5').subscribe(
      (team: Team) => (this.roster = team.roster),
      (error) => {},
      () => {}
    );
  }
}
