import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeatComponent } from './heat.component';
import { HeatRoutingModule } from './heat-routing.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeatComponent],
  exports: [HeatComponent],
  imports: [CommonModule, HeatRoutingModule, CardComponentModule, MatInputModule, MatIconModule, FormsModule]
})
export class HeatModule {}
