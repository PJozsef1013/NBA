import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BullsComponent } from './bulls.component';
import { BullsRoutingModule } from './bulls-routing.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';

@NgModule({
  declarations: [BullsComponent],
  imports: [CommonModule, BullsRoutingModule, CardComponentModule],
  exports: [BullsComponent]
})
export class BullsModule {}
