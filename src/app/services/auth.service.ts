import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class authService{
  private auth=false;
  private loggedUser: any;
  users=[
    {
      username:'Amine',
      password:'password',
      tel:'2100000'
    },
    {
      username:'Marwene',
      password:'password',
      tel:'2100000'
    },
    {
      username:'Amira',
      password:'password',
      tel:'2100000'
    }
  ]
  constructor(private http: HttpClient) { }


  verify(user: any)
  {
   this.users.map((element: any)=>{
    if(element.username===user.username && element.password===user.password)
    this.login(user);
   })
  }

  login(user: any)
  {
    this.auth=true;
    this.loggedUser=user;
  }

  logout()
  {
    this.auth=false;
  }

  getAuth()
  {
    return this.auth;
  }

  getLoggedUser()
  {
    return this.loggedUser;
  }
 
}
