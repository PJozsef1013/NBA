import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddPlayerModule } from '../../modals/add-player/add-player.module';
import { DeletePlayerModule } from '../../modals/delete-player/delete-player.module';
import { ModifyPlayerModule } from '../../modals/modify-player/modify-player.module';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    AddPlayerModule,
    ModifyPlayerModule,
    DeletePlayerModule,
    MatTooltipModule
  ],
  exports: [CardComponent]
})
export class CardComponentModule {}
