import { MyServicesComponent } from './my-services/my-services.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { ProjectsComponent } from './projects/projects.component';
import { CVComponent } from './cv/cv.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';
import { AuthGuard } from './Guard/guard.guard';

const routes: Routes = [
  {path:'',redirectTo:'/info',pathMatch:'full'},
  {path:'info',component:InfoComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'dashboard',component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'login',component:LogInComponent},
  {path:'cv',component:CVComponent},
  {path:'services',component:MyServicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
