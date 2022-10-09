import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class annonceServiceService{
  private annonceList;
  private url=environment.url;
  listNotifier: Subject<null> =new Subject<null>();
  constructor(private http: HttpClient) { }

  getAnnonce()
  {
    this.http.get<any>(this.url).subscribe(res =>{
      this.annonceList=res;
      this.annonceList.map((element: any)=>{
        element.id=Math.floor(Math.random() * 100).toString();
      });
    });
  }


  getList()
  {
    return this.annonceList;
  }

  setList(list: any)
  {
    this.annonceList=list;
  }

  notifyList()
  {
    this.listNotifier.next();
  }


 
}
