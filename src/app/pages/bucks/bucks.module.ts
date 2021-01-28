import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BucksComponent } from './bucks.component';
import { BucksRutingModule } from './bucks-ruting.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BucksComponent],
  imports: [CommonModule, BucksRutingModule, CardComponentModule, MatInputModule, MatIconModule, FormsModule]
})
export class BucksModule {}
