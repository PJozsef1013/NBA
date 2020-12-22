import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakersComponent } from './lakers.component';
import { LakersRoutingModule } from './lakers-routing.module';

@NgModule({
  declarations: [LakersComponent],
  imports: [CommonModule, LakersRoutingModule],
  exports: [LakersComponent]
})
export class LakersModule {}
