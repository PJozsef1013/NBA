import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'heat',
    loadChildren: () => import('./pages/heat/heat.module').then((m) => m.HeatModule),
    pathMatch: 'full'
  },
  {
    path: 'raptors',
    loadChildren: () => import('./pages/raptors/raptors.module').then((m) => m.RaptorsModule),
    pathMatch: 'full'
  },
  {
    path: 'bucks',
    loadChildren: () => import('./pages/bucks/bucks.module').then((m) => m.BucksModule),
    pathMatch: 'full'
  },
  {
    path: 'bulls',
    loadChildren: () => import('./pages/bulls/bulls.module').then((m) => m.BullsModule),
    pathMatch: 'full'
  },
  {
    path: 'celtics',
    loadChildren: () => import('./pages/celtics/celtics.module').then((m) => m.CelticsModule),
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'heat'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
