import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatComponent } from './heat.component';
import { HeatRoutingModule } from './heat-routing.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';

@NgModule({
  declarations: [HeatComponent],
  exports: [HeatComponent],
  imports: [CommonModule, HeatRoutingModule, CardComponentModule]
})
export class HeatModule {}
