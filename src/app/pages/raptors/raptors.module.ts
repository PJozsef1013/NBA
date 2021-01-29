import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaptorsComponent } from './raptors.component';
import { RaptorsRoutingModule } from './raptors-routing.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RaptorsComponent],
  exports: [RaptorsComponent],
  imports: [CommonModule, RaptorsRoutingModule, CardComponentModule, MatInputModule, MatIconModule, FormsModule]
})
export class RaptorsModule {}
