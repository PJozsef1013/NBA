import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MavericksComponent } from './mavericks.component';
import { MavericksRoutingModule } from './mavericks-routing.module';

@NgModule({
  declarations: [MavericksComponent],
  imports: [CommonModule, MavericksRoutingModule],
  exports: [MavericksComponent]
})
export class MavericksModule {}
