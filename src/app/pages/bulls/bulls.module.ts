import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BullsComponent } from './bulls.component';
import { BullsRoutingModule } from './bulls-routing.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BullsComponent],
  imports: [CommonModule, BullsRoutingModule, CardComponentModule, MatInputModule, MatIconModule, FormsModule],
  exports: [BullsComponent]
})
export class BullsModule {}
