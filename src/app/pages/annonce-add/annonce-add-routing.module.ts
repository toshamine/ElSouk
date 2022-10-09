import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceAddPage } from './annonce-add.page';

const routes: Routes = [
  {
    path: '',
    component: AnnonceAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceAddPageRoutingModule {}
