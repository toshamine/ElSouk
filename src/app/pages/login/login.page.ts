import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { annonceServiceService } from 'src/app/services/annonce-service.service';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class loginPage implements OnInit {
  user= {username:'',password:'',price:''};
  constructor(private authService:authService,private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
    
  }



  login(user: any)
  {
    this.authService.verify(user);
    if(this.authService.getAuth())
    this.router.navigate(['/annonces']);
    else
    this.alert();
  }

  async alert()
  {
    const alert=await this.alertCtrl.create({
      header:'4alet !',
      message:'Thabet fel username wel mot de passe raw fehom 7aja 4alta !',
      buttons: [
      {
        text:'Behy',
        role:'cancel'
      }
      ]
    });
    await alert.present();
  }



  
}
