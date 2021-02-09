import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from '../../interfaces/player';

@Component({
  selector: 'app-delete-player',
  templateUrl: './delete-player.component.html',
  styleUrls: ['./delete-player.component.scss']
})
export class DeletePlayerComponent implements OnInit {
  constructor(private dialogref: MatDialogRef<DeletePlayerComponent>, @Inject(MAT_DIALOG_DATA) public data: Player) {}

  ngOnInit(): void {}

  deletePlayer() {
    this.dialogref.close(this.data);
  }
  close() {
    this.dialogref.close();
  }
}
