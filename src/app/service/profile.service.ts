import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = '2d1ff9a3204b774face2';
  private clientsecret = '2274b56623bc11c5358758cc595fabcd59b13457';

  constructor(private http:Http) { }
}
