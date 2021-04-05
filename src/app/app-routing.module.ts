import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminguardGuard } from './adminguard.guard';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AssigncourseComponent } from './assigncourse/assigncourse.component';
import { AuthguardGuard } from './authguard.guard';
import { DummyComponent } from './dummy/dummy.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';

const routes: Routes = [
  {path:"", pathMatch:"full", redirectTo:"/home"},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegistrationComponent},
  {path:"userdashboard",component:UserdashboardComponent ,canActivate:[AuthguardGuard]},
  {path:"viewdetail/:Course_Id",component:ViewdetailComponent},
  {path:"admin",component:AdminloginComponent},
  {path:"editcourse/:Course_Id", component:EditcourseComponent,canActivate:[AdminguardGuard]},
  {path:"assigncourse/:User_Id/:UserName",component:AssigncourseComponent,canActivate:[AdminguardGuard]},
  {path:"admin/dashboard",component:AdmindashboardComponent,canActivate:[AdminguardGuard]},
  {path:"dummy",component:DummyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
