import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnnonceAddPageRoutingModule } from './annonce-add-routing.module';

import { AnnonceAddPage } from './annonce-add.page';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/Camera/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnnonceAddPageRoutingModule
  ],
  declarations: [AnnonceAddPage],
  providers: [StatusBar,
    SplashScreen,
    Camera,
    File],
})
export class AnnonceAddPageModule {}
