import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BullsComponent } from './bulls.component';

const routes: Routes = [{ path: '', component: BullsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BullsRoutingModule {}
