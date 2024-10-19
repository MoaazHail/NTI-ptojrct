import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataService {

  infoApi = "http://localhost:3000/info/update"
  constructor(private http: HttpClient) { }
  
  updateInfo(dataToUpData:any):Observable<any>{
    return this.http.patch<any>(this.infoApi,dataToUpData);
  }
}
