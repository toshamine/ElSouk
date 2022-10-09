import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { annonceServiceService } from 'src/app/services/annonce-service.service';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-annonce-add',
  templateUrl: './annonce-add.page.html',
  styleUrls: ['./annonce-add.page.scss'],
})
export class AnnonceAddPage implements OnInit {
  annonce= {title:'',desc:'',price:''}
  loggedUser=this.authService.getLoggedUser();
  constructor(private annonceService: annonceServiceService,private route: ActivatedRoute,private router: Router
    ,private authService: authService) { }

  ngOnInit() {
    
  }



  add(annonce: any)
  {
    const editedList=this.annonceService.getList();
    annonce.user=this.loggedUser.username;
    annonce.price=annonce.price.toString();
    annonce.pic='../assets/images/bmw.jpg';
    annonce.date=this.getSimpleDate(new Date());
    annonce.id=Math.floor(Math.random() * 100).toString();
    editedList.unshift(annonce);
    this.annonceService.setList(editedList);
    this.annonceService.notifyList();
    this.router.navigateByUrl('/annonces');
  }


  getSimpleDate(date: Date)
  {
   return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
  }

  
}
