import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';
import { annonceServiceService } from 'src/app/services/annonce-service.service';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-annonce-details',
  templateUrl: './annonce-details.page.html',
  styleUrls: ['./annonce-details.page.scss'],
})
export class AnnonceDetailsPage implements OnInit {
  annonce: any;
  loggedUser=this.authService.getLoggedUser();
  constructor(private route: ActivatedRoute,private annonceService: annonceServiceService,private alertCtrl: AlertController
    ,private router: Router,private authService: authService) { }

  ngOnInit() {
    const id=this.route.snapshot.paramMap.get('id');
    this.getAnnonceDetails(id);
  }

  getAnnonceDetails(id: string)
  {

    this.annonceService.getList().map((element: any)=>{
      if(element.id===id)
      {this.annonce=element;}
    });
  }

  async alert()
  {
   const alert= await this.alertCtrl.create({
    header:'Rod Belek',
    cssClass:'alertStyle',
    message:'Mathabet t7eb tfase5 el annonce hedy ?',
    buttons:[
      {
        text:'Ey',
        handler:() =>{
           this.deleteAnnonce();
        }
      },
      {
        text:'Le',
        role:'cancel'
      }
    ]
   });
   await alert.present();
  }

  deleteAnnonce()
  {
    const editedList=this.annonceService.getList().filter((element: any)=>
    {
      return element.id!=this.annonce.id;
    });
    this.annonceService.setList(editedList);
    this.annonceService.notifyList();
    this.router.navigateByUrl('/annonces');
  }

}
