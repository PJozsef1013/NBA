import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MavericksComponent } from './mavericks.component';

const routes: Routes = [{ path: '', component: MavericksComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MavericksRoutingModule {}
