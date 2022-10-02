import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { annonceServiceService } from 'src/app/services/annonce-service.service';

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.page.html',
  styleUrls: ['./annonces.page.scss'],
})
export class AnnoncePage implements OnInit {
  annonces:any[]=[];
  currentPage=1;
  constructor(private annonceService:annonceServiceService ,private loadingCtrl:LoadingController) { }

  ngOnInit() {
    
   this.loadannonces();
  }

  async loadannonces(event?:InfiniteScrollCustomEvent)
  {
   const loading= await this.loadingCtrl.create({
    message:'La7dha...',
    spinner:'bubbles'
   });
   await loading.present();

    this.annonceService.getAnnonce().subscribe(res=>{
      loading.dismiss();
      this.annonces=this.annonces.concat(res);
      
      event?.target.complete();

    })
    
  }

  loadMore(event:InfiniteScrollCustomEvent)
  {
    this.loadannonces(event);
  }
}
