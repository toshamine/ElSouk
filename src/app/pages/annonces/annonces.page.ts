import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { annonceServiceService } from 'src/app/services/annonce-service.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncePage implements OnInit {
  annonces: any[]=[];
  currentPage=1;
  notifier: Subscription=this.annonceService.listNotifier.subscribe(notified =>{    
    this.annonces=[];
    this.loadannonces();
  })
  constructor(private annonceService: annonceServiceService ,private loadingCtrl: LoadingController) { }
  
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
      this.annonces=this.annonces.concat(this.annonceService.getList());
      event?.target.complete();
    }, 1000);




  }

  loadMore(event: InfiniteScrollCustomEvent)
  {
    this.loadannonces(event);
  }
}
