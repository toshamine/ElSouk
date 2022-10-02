import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'annonces',
    loadChildren: () => import('./pages/annonces/annonces.module').then( m => m.AnnoncePageModule)
  },
  {
    path: '',
    redirectTo: 'annonces',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
