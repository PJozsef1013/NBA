import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RaptorsComponent } from './raptors.component';

const routes: Routes = [{ path: '', component: RaptorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RaptorsRoutingModule {}
