import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelticsComponent } from './celtics.component';
import { CelticsRoutingModule } from './celtics-routing.module';
import { CardComponentModule } from 'src/app/shared/components/card-component/card.module';

@NgModule({
  declarations: [CelticsComponent],
  imports: [CommonModule, CelticsRoutingModule, CardComponentModule],
  exports: [CelticsComponent]
})
export class CelticsModule {}
