import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';

@Component({
  selector: 'app-my-services',
  templateUrl: './my-services.component.html',
  styleUrl: './my-services.component.css'
})
export class MyServicesComponent {
  services: any[] = [];

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.getService().subscribe(
      (data) => {
        this.services = data;
        console.log(data)
  
      },
      (error) => {
        console.error('Error fetching Services:', error);
      }
    );
  }


}
