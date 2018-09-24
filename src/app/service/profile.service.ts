import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;

  constructor(private http:Http) { 
    console.log("Service works");
    this.username = 'jasny';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/"+this.username+"?client_id="+environment.clientid+"&client_secret="+environment.clientsecret)
    .pipe(
    map(res => res.json()));
  }
  getProfileRepo(){
    return this.http.get("https://api.github.com/users/"+this.username+"/repos?client_id="+environment.clientid+"&client_secret="+environment.clientsecret)
    .pipe(
    map(res => res.json()));
  }
}
