import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'clouds',
    loadChildren: () => import('./clouds/clouds.module').then( m => m.CloudsPageModule)
  },
  {
    path: 'warmcountries',
    loadChildren: () => import('./warmcountries/warmcountries.module').then( m => m.WarmcountriesPageModule)
  },
  {
    path: 'coldcountries',
    loadChildren: () => import('./coldcountries/coldcountries.module').then( m => m.ColdcountriesPageModule)
  },
  {
    path: 'todaysweather',
    loadChildren: () => import('./todaysweather/todaysweather.module').then( m => m.TodaysweatherPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
