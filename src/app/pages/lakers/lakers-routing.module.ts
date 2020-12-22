import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LakersComponent } from './lakers.component';

const routes: Routes = [{ path: '', component: LakersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LakersRoutingModule {}
