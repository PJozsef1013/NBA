import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faEdit, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Player } from '../../interfaces/player';
import { AddPlayerComponent } from '../../modals/add-player/add-player.component';
import { DeletePlayerComponent } from '../../modals/delete-player/delete-player.component';
import { ErrorMessageComponent } from '../../modals/error-message/error-message.component';
import { ModifyPlayerComponent } from '../../modals/modify-player/modify-player.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  readonly faPlus = faPlus;
  readonly faEdit = faEdit;
  readonly faTrashAlt = faTrashAlt;
  value: string = '';
  textToAdd = 'Add new player';
  textToEdit = 'Edit player';
  textToDelete = 'Delete player';

  @Input() roster: Player[];
  @Input() teamId: string;
  @Output() playerFiltered = new EventEmitter<string>();
  @Output() filterReseted = new EventEmitter();
  @Output() playerAdded = new EventEmitter();
  @Output() playerEdited = new EventEmitter();
  @Output() playerDeleted = new EventEmitter();

  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  ngOnInit(): void {}

  onChange() {
    setTimeout(() => {
      this.playerFiltered.emit(this.value);
    }, 3000);
  }

  resetFilter() {
    this.value = '';
    this.filterReseted.emit();
  }

  openModal() {
    const data: Player = {
      playerDatas: {},
      playerStats: { twoThousendNineTeen: {}, twoThousendTwenty: {} }
    } as Player;
    const dialogRef = this.dialog.open(AddPlayerComponent, { height: '1000px', width: '800px', disableClose: true, data });

    dialogRef.afterClosed().subscribe((result: Player) => {
      if (result) {
        this.addNewPlayer(this.teamId, result.id, result);
      }
    });
  }

  openEditModal(idx) {
    const data: Player = this.roster[idx];

    const dialogRef = this.dialog.open(ModifyPlayerComponent, { height: '1000px', width: '800px', disableClose: true, data });

    dialogRef.afterClosed().subscribe((result: Player) => {
      if (result) {
        this.editPlayer(this.teamId, result.id, result);
      }
    });
  }
  openDeleteModal(idx) {
    const data: Player = this.roster[idx];

    const dialogRef = this.dialog.open(DeletePlayerComponent, { height: '120px', width: '600px', disableClose: true, data });

    dialogRef.afterClosed().subscribe((result: Player) => {
      if (result) {
        this.deletePlayer(this.teamId, result.id);
      }
    });
  }

  addNewPlayer(teamId: string, playerId: string, request: Player) {
    this.apiService.addNewPlayer(teamId, playerId, request).subscribe(
      (response) => {
        if (response) {
          this.playerAdded.emit();
        }
      },
      (error) => {
        console.log(error);
        if (error) {
          const dialogRef = this.dialog.open(ErrorMessageComponent, {
            height: '1000px',
            width: '800px',
            data: error.error.error
          });
          dialogRef.afterClosed().subscribe(() => this.playerAdded.emit());
        }
      }
    );
  }

  editPlayer(teamId: string, playerId: string, request: Player) {
    this.apiService.editPlayer(teamId, playerId, request).subscribe(
      (response) => {
        if (response) {
          this.playerEdited.emit();
        }
      },
      (error) => {
        if (error) {
          this.dialog.open(ErrorMessageComponent, {
            height: '1000px',
            width: '800px',
            data: error.error.error
          });
        }
      }
    );
  }
  deletePlayer(teamId: string, playerId: string) {
    this.apiService.deletePlayer(teamId, playerId).subscribe(
      (response) => {
        if (response) {
          console.log(response);
          this.playerDeleted.emit();
        }
      },
      (error) => {
        if (error) {
          this.dialog.open(ErrorMessageComponent, {
            height: '1000px',
            width: '800px',
            data: error.error.error
          });
        }
      }
    );
  }
}
