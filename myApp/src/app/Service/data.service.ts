import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient) { }
  
  private projectApi = 'http://localhost:3000/project/data';

  getProjects(): Observable<any> {
    return this.http.get<any>(this.projectApi);
  }

  private infoApi = 'http://localhost:3000/info/data';

  getInfo(): Observable<any> {
    return this.http.get<any>(this.infoApi);
  }

  private CVApi = 'http://localhost:3000/CV/data';

  getCV(): Observable<any> {
    return this.http.get<any>(this.CVApi);
  }

  private serviceApi = 'http://localhost:3000/service/data';

  getService(): Observable<any> {
    return this.http.get<any>(this.serviceApi);
  }

  deleteProject(projectTitle: string): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/project/delete/${projectTitle}`);
  }
  
  updateProject(projectTitle: string, updatedData: any): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/project/update/${projectTitle}`, updatedData);
  }
}
