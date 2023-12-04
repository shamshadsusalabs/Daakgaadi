import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/example-module1/service/loginservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: LoginserviceService, private router:Router ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // onLoginClick(): void {
  //   if (this.authService.login(this.email, this.password)) {
  //     // Navigate to the dashboard or perform any desired action.
  //     this.router.navigate(['/dashboard']);
  //   } else {
  //     alert('Invalid email or password');

  //   }
  // }





   onLoginClick() {


    if (this.authService.login1(this.email, this.password)) {
          // Navigate to the dashboard or perform any desired action.
          this.router.navigate(['example/ratedashboard']);
          return ;
        } else {
          alert('Invalid email or password');

       }
  //   if(this.email == '') {
  //     alert('Please enter email');
  //     return;
  //   }

  //   if(this.password == '') {
  //     alert('Please enter password');
  //     return;
  //   }

  //   this.userauth.login(this.email,this.password);

  //   this.email = '';
  //   this.password = '';

  // }



}

}
