import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { annonceServiceService } from 'src/app/services/annonce-service.service';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user= {username:'',password:'',tel:''};
  constructor(private authService:authService,private router: Router,private alertCtrl: AlertController) { }

  ngOnInit() {
    
  }



  register(user: any)
  {
    if(!this.verifyPassword(user.password))
    this.alert('7ot mot de passe feha des chiffres w des letters yehdik w feha 8 caractere !');
    else if(!this.authService.checkUsername(user.username))
    this.alert('El username heda deja mowjod !');
    else
    {
     this.authService.registerUser(user);
     this.router.navigate(['login']);
    }
  }

  verifyPassword(password:string)
  {

    if(password.length<6 || !this.containsLetters(password) || !this.containsNumber(password))
    {
      return false;
    }
    return true;

  }

  containsNumber(password:string)
  {
    let valid=false;
    for(let i=0;i<10;i++)
    {
     if(password.indexOf(i.toString())!=-1)
     {
       valid=true;
     }
    }
    return valid;
  }

  containsLetters(password:string)
  {
    let letterRegex=new RegExp("^(?=.*[a-z])|(?=.*[A-Z])");
    return letterRegex.test(password);
     
  }

  async alert(message:string)
  {
    const alert=await this.alertCtrl.create({
      header:'4alet !',
      cssClass:'alertStyle',
      message:message,
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
