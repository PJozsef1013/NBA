import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucksComponent } from './bucks.component';
import { BucksRutingModule } from './bucks-ruting.module';

@NgModule({
  declarations: [BucksComponent],
  imports: [CommonModule, BucksRutingModule]
})
export class BucksModule {}
