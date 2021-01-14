import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponentComponent } from './card-component.component';

@NgModule({
  declarations: [CardComponentComponent],
  imports: [CommonModule],
  exports: [CardComponentComponent]
})
export class CardComponentModule {}
