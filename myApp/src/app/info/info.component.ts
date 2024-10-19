import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  info:any[]=[];

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.fetchInfo();
  }
  
  fetchInfo(): void {
    this._data.getInfo().subscribe(
      (data) => {
        this.info = data;
        console.log(this.info)
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }

}
