import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifyPlayerComponent } from './modify-player.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ModifyPlayerComponent],
  imports: [CommonModule, MatInputModule, FormsModule, MatButtonModule],
  exports: [ModifyPlayerComponent]
})
export class ModifyPlayerModule {}
