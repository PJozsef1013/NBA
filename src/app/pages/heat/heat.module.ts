import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatComponent } from './heat.component';
import { HeatRoutingModule } from './heat-routing.module';

@NgModule({
  declarations: [HeatComponent],
  exports: [HeatComponent],
  imports: [CommonModule, HeatRoutingModule]
})
export class HeatModule {}
