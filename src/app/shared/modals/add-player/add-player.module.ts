import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPlayerComponent } from './add-player.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [AddPlayerComponent],
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatTooltipModule],
  exports: [AddPlayerComponent]
})
export class AddPlayerModule {}
