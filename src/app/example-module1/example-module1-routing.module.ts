import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { Auth } from '@angular/fire/auth';
import { AuthGuard } from './service/auth.guard';
import { AddcityComponent } from './addcity/addcity.component';
import { AddRouteComponent } from './add-route/add-route.component';


const routes: Routes = [

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'addcity',
    component: AddcityComponent
  },
  {
    path: 'addroute',
    component: AddRouteComponent
  },
  
  {
    path: 'ratedashboard',
    component: DashbordComponent,
         canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExampleModule1RoutingModule { }
