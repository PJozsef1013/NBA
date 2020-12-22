import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaptorsComponent } from './raptors.component';
import { RaptorsRoutingModule } from './raptors-routing.module';

@NgModule({
  declarations: [RaptorsComponent],
  exports: [RaptorsComponent],
  imports: [CommonModule, RaptorsRoutingModule]
})
export class RaptorsModule {}
