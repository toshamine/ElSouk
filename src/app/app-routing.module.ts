import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'annonces',
    loadChildren: () => import('./pages/annonces/annonces.module').then( m => m.AnnoncePageModule)
  },
  {
    path: 'annonces/:id',
    loadChildren: () => import('./pages/annonce-details/annonce-details.module').then( m => m.AnnonceDetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'annonces',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/annonce-edit/annonce-edit.module').then( m => m.AnnonceEditPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
