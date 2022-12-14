import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnoncePage } from './annonces.page';

const routes: Routes = [
  {
    path: '',
    component: AnnoncePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnoncePageRoutingModule {}
