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
    path: 'lakers',
    loadChildren: () => import('./pages/lakers/lakers.module').then((m) => m.LakersModule),
    pathMatch: 'full'
  },
  {
    path: 'mavericks',
    loadChildren: () => import('./pages/mavericks/mavericks.module').then((m) => m.MavericksModule),
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
