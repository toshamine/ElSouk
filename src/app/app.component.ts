import { Component, OnInit } from '@angular/core';
import { annonceServiceService } from './services/annonce-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private annonceService: annonceServiceService) {}


  ngOnInit(): void {
    this.annonceService.getAnnonce();
  }
}
