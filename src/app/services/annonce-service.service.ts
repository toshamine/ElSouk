import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class annonceServiceService {
  
  private url=environment.url;
  constructor(private http:HttpClient) { }

  getAnnonce()
  {
    return this.http.get<any>(this.url);
  }

 
}
