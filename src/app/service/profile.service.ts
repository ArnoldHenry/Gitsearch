import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = '2d1ff9a3204b774face2';
  private clientsecret = '2274b56623bc11c5358758cc595fabcd59b13457';

  constructor(private http:Http) { 
    console.log("Service works");
    this.username = 'jasny';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/"+this.username+"?client_id="+this.clientid+"&client_secret="+this.clientsecret)
    .pipe(
    map(res => res.json()));
  }
}
