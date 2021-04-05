import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule  } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CourselistPipe } from './courselist.pipe';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { HeaderComponent } from './header/header.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { DummyComponent } from './dummy/dummy.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { EditcourseComponent } from './editcourse/editcourse.component';
import { AssigncourseComponent } from './assigncourse/assigncourse.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    CourselistPipe,
    ViewdetailComponent,
    HeaderComponent,
    UserdashboardComponent,
    DummyComponent,
    AdminloginComponent,
    AdmindashboardComponent,
    AdminheaderComponent,
    EditcourseComponent,
    AssigncourseComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
