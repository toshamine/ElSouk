import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnoncePageRoutingModule } from './annonces-routing.module';

import { AnnoncePage } from './annonces.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnoncePageRoutingModule
  ],
  declarations: [AnnoncePage]
})
export class AnnoncePageModule {}
