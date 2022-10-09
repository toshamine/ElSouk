import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnonceAddPageRoutingModule } from './annonce-add-routing.module';

import { AnnonceAddPage } from './annonce-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnonceAddPageRoutingModule
  ],
  declarations: [AnnonceAddPage]
})
export class AnnonceAddPageModule {}
