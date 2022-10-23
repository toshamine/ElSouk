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

  filterPrice(min:Number,max:Number)
  {
    this.annonces=this.annonceService.getList().filter((element: any)=>{
      return (+element.price>=+min && +element.price <=+max);
    });

  }


  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Kifech t7eb el filtre ?',
      cssClass:'alertStyle',
      buttons: [
        {
          text:'Emrigel',
          handler:(alertData)=>{
            if(alertData==='mine')
            this.filter();
            else if(alertData=='price')
            this.presentPrice()
            else
            this.loadannonces();
          }
        }
      ],
      inputs: [
        {
          label: 'Les Annonces El Koul',
          cssClass:'alertStyle',
          type: 'radio',
          value: 'all',
        },
        {
          label: 'Ken Les Annonces Emte3i',
          type: 'radio',
          value: 'mine',
        },
        {
          label: 'Bel Soum',
          type: 'radio',
          value: 'price',
        },
      ],
    });
    
    await alert.present();
  }

  async presentPrice() {
    const alert = await this.alertController.create({
      header: '7ot el soum bin chnowa',
      cssClass:'alertStyle',
      buttons: [
        {
          text:'Emrigel',
          handler:(alertData)=>{
            let max=1000000;
            if(alertData[1])
            max=alertData[1]
            this.filterPrice(alertData[0] | 0,max)
            
          }
        }
      ],
      inputs: [
        {
          type: 'number',
          placeholder: 'A9al Soum',
          min: 1,
        },
        {
          type: 'number',
          placeholder: 'Akther Soum',
          min: 1,
        },
      ],
    });
    
    await alert.present();
  }

}
