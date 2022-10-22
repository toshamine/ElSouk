import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { annonceServiceService } from 'src/app/services/annonce-service.service';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncePage implements OnInit {
  annonces: any[]=[];
  currentPage=1;
  loggedUser=this.authService.getLoggedUser();
  notifier: Subscription=this.annonceService.listNotifier.subscribe(notified =>{    
    this.loadannonces();
  })
  constructor(private annonceService: annonceServiceService ,private loadingCtrl: LoadingController,
    private authService: authService,private router: Router,private alertController: AlertController) { }
  
  ngOnInit() {
   this.loadannonces();
  }

  async loadannonces(event?: InfiniteScrollCustomEvent)
  {
    
   const loading= await this.loadingCtrl.create({
    message:'La7dha...',
    spinner:'bubbles'
   });
   await loading.present();

    setTimeout(() => {
      loading.dismiss();
      this.annonces=this.annonceService.getList();
      
      event?.target.complete();
    }, 1000);




  }

  loadMore(event: InfiniteScrollCustomEvent)
  {
    this.loadannonces(event);
  }

  search(search: string)
  {
    
    this.annonces=this.annonceService.getList().filter((element: any)=>{
      return element.title.toUpperCase().includes(search.toUpperCase());
    });
    
  }

  logout()
  {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  filter()
  {
    this.annonces=this.annonceService.getList().filter((element: any)=>{
      return element.user===this.loggedUser.username;
    });

  }


  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Select your favorite color',
      cssClass:'alertStyle',
      buttons: [
        {
          text:'Emrigel',
          handler:(alertData)=>{
            if(alertData==='mine')
            this.filter();
            else
            this.loadannonces();
          }
        }
      ],
      inputs: [
        {
          label: 'Les Annonces El Koul',
          type: 'radio',
          value: 'all',
        },
        {
          label: 'Ken Les Annonces Emte3i',
          type: 'radio',
          value: 'mine',
        },
      ],
    });
    
    await alert.present();
  }

}
