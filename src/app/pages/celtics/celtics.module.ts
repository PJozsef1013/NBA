import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelticsComponent } from './celtics.component';
import { CelticsRoutingModule } from './celtics-routing.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CelticsComponent],
  imports: [CommonModule, CelticsRoutingModule, CardComponentModule, MatInputModule, MatIconModule, FormsModule],
  exports: [CelticsComponent]
})
export class CelticsModule {}
