import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-internatinal',
  templateUrl: './internatinal.component.html',
  styleUrls: ['./internatinal.component.css']
})
export class InternatinalComponent implements OnInit {

  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

name:string='';
mobile:string='';
email:string='';
pickupDate:string='';
pickupCountry:string='';
deliveryCountry:string='';
comments:string='';



  booknow() {
    
    const bookingData = {
      name: this.name,
      number:this.mobile,
      email: this.email,
      pickupDate: this.pickupDate,
      pickupCountry: this.pickupCountry,
      deliveryCountry: this.deliveryCountry,
      comments: this.comments
    };

    // Send a POST request to your API with the booking data
    this.http.post('https://inspiring-being-405110.el.r.appspot.com/mail/sendmail/internatinalmover', bookingData).subscribe(
      (response) => {
        console.log('email sent successfully', response);
        // You can display a success message to the user if needed
      },
      (error) => {
        console.error('Error sending booking email', error);
        // Handle errors, such as showing an error message to the user
      }
    );
    this.reset();
    
  this.showSuccessMessage();
  }

  reset(){
     this.name='';
     this.mobile='';
     this.email='';
     this.pickupDate='';
     this. pickupCountry='';
     this.deliveryCountry='';
     this.comments='';
     
  }
  showSuccessMessage() {
    this.snackBar.open('Your order is successfull .check your email', 'Dismiss', {
      duration: 5000,
    });
  }

}
