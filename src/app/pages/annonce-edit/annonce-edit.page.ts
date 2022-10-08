import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { annonceServiceService } from 'src/app/services/annonce-service.service';

@Component({
  selector: 'app-annonce-edit',
  templateUrl: './annonce-edit.page.html',
  styleUrls: ['./annonce-edit.page.scss'],
})
export class AnnonceEditPage implements OnInit {
  annonce: any;
  editId: any;
  constructor(private annonceService: annonceServiceService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.getId();
    this.getAnnonce();
  }

  getId()
  {
   this.editId=this.route.snapshot.paramMap.get('id');
  }
  getAnnonce()
  {
    this.annonceService.getList().map((element: any)=>{
      if(element.id===this.editId)
      {this.annonce=element;}
    });
  }

  edit(annonce: any)
  {
    const editedList=this.annonceService.getList();
    editedList.map((element: any)=>{
      if(element.id===annonce.id)
      {
        element.title=annonce.title;
        element.price=annonce.price;
        element.desc=annonce.desc;
      }
    });
    this.annonceService.setList(editedList);
    this.router.navigateByUrl('/');
  }

  
}
