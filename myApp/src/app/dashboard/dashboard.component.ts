import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddDataService } from '../Service/add-data.service';
import { UpdateDataService } from '../Service/update-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  constructor(private _addData:AddDataService, private _updateData:UpdateDataService){}
  // ngOnInit(): void {
    
  // }

  
  
  infoForm:FormGroup = new FormGroup({
    name:new FormControl(''),
    jobTitle:new FormControl(''),
    myImage:new FormControl(''),
    phoneNumber:new FormControl(''),
    location:new FormControl(''),
    education:new FormControl('')
  })
  
  workForm:FormGroup = new FormGroup({
    projectTitle:new FormControl(''),
    projectImage:new FormControl(''),
    projectInfo:new FormControl(''),
    projectLink:new FormControl('')
  })
  
    saveInfo(){
      const formInfo = {
        name: this.infoForm.get('name')?.value,
        jobTitle: this.infoForm.get('jobTitle')?.value,
        phone: this.infoForm.get('phoneNumber')?.value,
        location: this.infoForm.get('location')?.value,
        education: this.infoForm.get('education')?.value,
      };
      this._updateData.updateInfo(formInfo).subscribe(data=>{
        console.log(data);
      })
      
    }
  CVForm:FormGroup = new FormGroup({
    CVUrl:new FormControl('')
  })



  saveInfoProject(){
      const formProject = {
        projectTitle: this.workForm.get('projectTitle')?.value,
        projectImage: this.workForm.get('projectImage')?.value,
        projectInfo: this.workForm.get('projectInfo')?.value,
        projectLink: this.workForm.get('projectLink')?.value,
      };
    this._addData.addProject(formProject).subscribe(data=>{
      console.log(data);
    })
  }
  saveCV(){
    const CVUrl = this.CVForm.value; 
  }
}
