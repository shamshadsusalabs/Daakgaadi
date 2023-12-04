import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-officefactory',
  templateUrl: './officefactory.component.html',
  styleUrls: ['./officefactory.component.css']
})
export class OfficefactoryComponent implements OnInit {

  constructor(private http: HttpClient,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

name:string='';
mobile:string='';
email:string='';
pickupDate:string='';
pickupCity:string='';
deliveryCity:string='';
comments:string='';







 

  booknow() {
    
    const bookingData = {
      name: this.name,
      number:this.mobile,
      email: this.email,
      pickupDate: this.pickupDate,
      pickupCity: this.pickupCity,
      deliveryCity: this.deliveryCity,
      comments: this.comments
    };

    // Send a POST request to your API with the booking data
    this.http.post('https://inspiring-being-405110.el.r.appspot.com/mail/sendmail/officefactory', bookingData).subscribe(
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
     this. pickupCity='';
     this.deliveryCity='';
     this.comments='';
     
  }
  showSuccessMessage() {
    this.snackBar.open('Your order is successfull .check your email', 'Dismiss', {
      duration: 5000,
    });
  }
   
  
   
}
