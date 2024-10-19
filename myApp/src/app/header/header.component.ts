import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private _data: DataService) { }

  homeData:any[] = [];
  ngOnInit(): void {
    this._data.getInfo().subscribe(
      (data) => {
        this.homeData = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}
