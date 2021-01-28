import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaptorsComponent } from './raptors.component';
import { RaptorsRoutingModule } from './raptors-routing.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';

@NgModule({
  declarations: [RaptorsComponent],
  exports: [RaptorsComponent],
  imports: [CommonModule, RaptorsRoutingModule, CardComponentModule]
})
export class RaptorsModule {}
