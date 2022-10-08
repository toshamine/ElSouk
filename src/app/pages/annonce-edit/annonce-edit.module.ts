import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnonceEditPageRoutingModule } from './annonce-edit-routing.module';

import { AnnonceEditPage } from './annonce-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnonceEditPageRoutingModule
  ],
  declarations: [AnnonceEditPage]
})
export class AnnonceEditPageModule {}
