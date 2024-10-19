import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddDataService {
  
  constructor(private http: HttpClient) { }

  infoApi = "http://localhost:3000/project/add";

  addProject(form?:any):Observable<any>{
    return this.http.post<any>(this.infoApi,form);
  }

}
