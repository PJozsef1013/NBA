import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelticsComponent } from './celtics.component';

const routes: Routes = [{ path: '', component: CelticsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CelticsRoutingModule {}
