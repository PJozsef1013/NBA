import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule, MatIconModule, MatInputModule, FormsModule],
  exports: [CardComponent]
})
export class CardComponentModule {}
