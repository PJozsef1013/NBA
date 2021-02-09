import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from 'src/app/shared/interfaces/player';

@Component({
  selector: 'app-modify-player',
  templateUrl: './modify-player.component.html',
  styleUrls: ['./modify-player.component.scss']
})
export class ModifyPlayerComponent implements OnInit {
  constructor(private dialogref: MatDialogRef<ModifyPlayerComponent>, @Inject(MAT_DIALOG_DATA) public data: Player) {}

  ngOnInit(): void {}

  saveModifications() {
    this.dialogref.close(this.data);
  }
  cancel() {
    this.dialogref.close();
  }
  inputChanged() {}
}
