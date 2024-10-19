import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CVComponent {
  
  pdfUrl: SafeResourceUrl | undefined;
  constructor(private _data: DataService, private sanitizer: DomSanitizer) { }
  
  cv:any[]=[];
  
  ngOnInit(): void {
    this._data.getCV().subscribe(
      (data) => {
        this.cv = data;
        console.log(this.cv)
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
  down(){
    const pdf = 'CV.pdf'; // Path to the PDF file
    this.pdfUrl = this.sanitizer.bypassSecurityTrustResourceUrl(pdf);
  }
  
  
}
