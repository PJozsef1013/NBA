import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Player } from '../../interfaces/player';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.scss']
})
export class AddPlayerComponent implements OnInit {
  toolTip: string = '';
  disabled = true;
  subject = new Subject<Player>();
  subscription: Subscription;
  constructor(private dialogRef: MatDialogRef<AddPlayerComponent>, @Inject(MAT_DIALOG_DATA) public data: Player) {}

  ngOnInit(): void {
    this.setToolTip();
    this.subscription = this.subject
      .asObservable()
      .pipe(debounceTime(1000))
      .subscribe((value) => this.setToolTip());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  inputChanged() {
    this.subject.next(this.data);
  }

  saveNewPlayer() {
    this.dialogRef.close(this.data);
  }

  cancel() {
    this.dialogRef.close();
  }

  setToolTip() {
    if (!this.data.id) {
      this.toolTip = 'Id is missing';
      return;
    }
    if (!this.data.imageUrl) {
      this.toolTip = 'ImageUrl is missing';
      return;
    }
    if (!this.data.playerDatas.age) {
      this.toolTip = 'Age is missing';
      return;
    }
    if (!this.data.playerDatas.height) {
      this.toolTip = 'Height is missing';
      return;
    }
    if (!this.data.playerDatas.playerName) {
      this.toolTip = 'Playername is missing';
      return;
    }
    if (!this.data.playerDatas.position) {
      this.toolTip = 'Position is missing';
      return;
    }
    if (!this.data.playerDatas.weight) {
      this.toolTip = 'weight is missing';
      return;
    }
    if (!this.data.playerDatas.yerseyNumber) {
      this.toolTip = 'Yersey number is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendNineTeen.pointsPerGame) {
      this.toolTip = 'Points per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendNineTeen.reboundsPerGame) {
      this.toolTip = 'Rebounds per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendNineTeen.assistsPerGame) {
      this.toolTip = 'Assists per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendNineTeen.stealsPerGame) {
      this.toolTip = 'Steals per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendNineTeen.blocksPerGame) {
      this.toolTip = 'Blocks per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendTwenty.pointsPerGame) {
      this.toolTip = 'Points per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendTwenty.reboundsPerGame) {
      this.toolTip = 'Rebounds per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendTwenty.assistsPerGame) {
      this.toolTip = 'Assists per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendTwenty.stealsPerGame) {
      this.toolTip = 'Steals per game is missing';
      return;
    }
    if (!this.data.playerStats.twoThousendTwenty.blocksPerGame) {
      this.toolTip = 'Blocks per game is missing';
      return;
    }
    this.toolTip = '';
    this.disabled = false;
  }
}
