import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BucksComponent } from './bucks.component';

const routes: Routes = [{ path: '', component: BucksComponent }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BucksRutingModule {}
