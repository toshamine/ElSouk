import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnonceEditPage } from './annonce-edit.page';

const routes: Routes = [
  {
    path: '',
    component: AnnonceEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnnonceEditPageRoutingModule {}
