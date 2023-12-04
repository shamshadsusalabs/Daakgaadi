import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from "./app.component";
import { ExampleModule1RoutingModule } from './example-module1-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { FooterComponent } from './footer/footer.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { NavbarComponent } from './navbar/navbar.component';
import { AddcityComponent } from './addcity/addcity.component';
import { MatIconModule } from '@angular/material/icon';
import { AddRouteComponent } from './add-route/add-route.component';



@NgModule({
  declarations: [LoginComponent, DashbordComponent,FooterComponent,AppComponent,NavbarComponent, AddcityComponent, AddRouteComponent],
  imports: [
    CommonModule,
    ExampleModule1RoutingModule,
    FormsModule ,
    ReactiveFormsModule,
    ClipboardModule,
    MatIconModule
    
    

  ]
})
export class ExampleModule1Module { }
