import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeatComponent } from './heat.component';

const routes: Routes = [{ path: '', component: HeatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeatRoutingModule {}
