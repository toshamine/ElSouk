import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './utility/auth.guard';

const routes: Routes = [
  {
    path: 'annonces',
    loadChildren: () => import('./pages/annonces/annonces.module').then( m => m.AnnoncePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'annonces/:id',
    loadChildren: () => import('./pages/annonce-details/annonce-details.module').then( m => m.AnnonceDetailsPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/annonce-edit/annonce-edit.module').then( m => m.AnnonceEditPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/annonce-add/annonce-add.module').then( m => m.AnnonceAddPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.loginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
