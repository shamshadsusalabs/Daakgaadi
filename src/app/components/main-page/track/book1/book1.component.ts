/// <reference types="googlemaps" />
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Rate } from 'src/app/example-module1/service/interface';
import { map } from 'rxjs/operators';
declare var google: any;
@Component({
  selector: 'app-book1',
  templateUrl: './book1.component.html',
  styleUrls: ['./book1.component.css']
})
export class Book1Component implements OnInit {

   constructor(private elementRef: ElementRef,
    private http: HttpClient,private snackBar: MatSnackBar) {
    
      this.type = localStorage.getItem('type');
    
  }

 
  type :any;
  
from:string;
to:string;

termsAndConditionsChecked: boolean = false;
  showForm1: boolean = false;
  toggleForm() {
    this.showForm1 = !this.showForm1;
  } 
data1!: any[];
private url1='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Boloro.json'
fetchrate1(){
  this.http.get<Rate>(this.url1).pipe(map(resData=>{
    console.log(resData);
    const RateArray =[];
   
   for(const key in resData){
    // console.log(key);
    console.log({...resData[key]});
    if(resData.hasOwnProperty(key)){RateArray.push({id:key,...resData[key]})}
  
   }
   return RateArray
  }))
  .subscribe(res=>{
    console.log(res);
    this.data1 = res
  })
}


private myLatLng: { lat: number; lng: number } = { lat: 38.3460, lng: -0.4907 };
private map!: google.maps.Map;

ngOnInit() {
  this.initMap();
  this.initAutocomplete();
  this.fetchrate1();
}

initMap() {
  const myLatLng = { lat: 38.3460, lng: -0.4907 };
  const mapOptions = {
    center: myLatLng,
    zoom: 7,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();
  directionsDisplay.setMap(map);
}

initAutocomplete() {
  const input1 = document.getElementById('from') as HTMLInputElement;
  const autocomplete1 = new google.maps.places.Autocomplete(input1);

  const input2 = document.getElementById('to') as HTMLInputElement;
  const autocomplete2 = new google.maps.places.Autocomplete(input2);
}
name1:string='';
email1:string='';
 contact1:string='';

calcRoute() {

  var email=this.email1;
  var name=this.name1;
   var number=this.contact1;
   if(email=='' || number=='' || name==''){
     alert("please fill email and number")
     return;
   }
  const request = {
    origin: (document.getElementById('from') as HTMLInputElement).value,
    destination: (document.getElementById('to') as HTMLInputElement).value,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
     // Set unitSystem to METRIC for kilometers
  };

  const directionsService = new google.maps.DirectionsService();
  const directionsDisplay = new google.maps.DirectionsRenderer();

  directionsService.route(request, (result: { routes: { legs: { distance: any; duration: { text: any; }; }[]; }[]; }, status: any) => {
    if (status === google.maps.DirectionsStatus.OK) {
      const distanceInKm = parseFloat(result.routes[0].legs[0].distance.text.replace(/,/g, "").replace(" km", ""));
      var rate: number;
      console.log(`Distance: ${distanceInKm}`);
      for(let data of this.data1){
        console.log(data);
      if (distanceInKm <= 50) {
        rate = distanceInKm * data.rate1;
      } else if (distanceInKm <= 100) {
        rate = distanceInKm * data.rate2;
      }
      else if(distanceInKm<=150){
                rate=distanceInKm*data.rate3;
                //Handle distances greater than 100km if needed
              }
              else if(distanceInKm<=200){
                rate=distanceInKm*data.rate4;
              }
        
              else if(distanceInKm<=250){
                rate=distanceInKm*data.rate5;
              }
              else if(distanceInKm<=300){
              rate=distanceInKm*data.rate6;
                
              }
              else if(distanceInKm<=350){
        
                rate=distanceInKm*data.rate7;
              }
              else if(distanceInKm<=400) {
                rate=distanceInKm*data.rate8;
              }
              
              else if(distanceInKm<=450) {
                rate=distanceInKm*data.rate9;
              }
              else if(distanceInKm<=500) {
                rate=distanceInKm*data.rate10;
              }
              else if(distanceInKm<=550) {
                rate=distanceInKm*data.rate11;
              }
              else if(distanceInKm<=600) {
                rate=distanceInKm*data.rate12;
              }
              else if(distanceInKm<=650) {
                rate=distanceInKm*data.rate13;
              }
              else if(distanceInKm<=700) {
                rate=distanceInKm*data.rate14;
              }
              else if(distanceInKm<=750) {
                rate=distanceInKm*data.rate15;
              }
              else if(distanceInKm<=800) {
                rate=distanceInKm*data.rate16;
              }
              else if(distanceInKm<=850) {
                rate=distanceInKm*data.rate17;
              }
              else if(distanceInKm<=900) {
                rate=distanceInKm*data.rate18;
              }
              else if(distanceInKm<=950) {
                rate=distanceInKm*data.rate19;
              }
              else if(distanceInKm<=1000) {
               
                rate=distanceInKm*data.rate20;
                
              }
              else if(distanceInKm<=1050) {
                rate=distanceInKm*data.rate21;
              }
              else if(distanceInKm<=1100) {
                rate=distanceInKm*data.rate22;
              }
              else if(distanceInKm<=1150) {
                rate=distanceInKm*data.rate23;
              }
              else if(distanceInKm<=1200) {
                rate=distanceInKm*data.rate24;
              }
              else if(distanceInKm<=1250) {
                rate=distanceInKm*data.rate25;
              }
              else if(distanceInKm<=1300) {
                rate=distanceInKm*data.rate26;
              }
              else if(distanceInKm<=1350) {
                rate=distanceInKm*data.rate27;
              }
              else if(distanceInKm<=1400) {
                rate=distanceInKm*data.rate28;
              }
              else if(distanceInKm<=1450) {
                rate=distanceInKm*data.rate29;
              }
          
              else if(distanceInKm<=1500) {
                rate=distanceInKm*data.rate30;
              }
              else if(distanceInKm<=1550) {
                rate=distanceInKm*data.rate31;
              }
              else if(distanceInKm<=1600) {
                rate=distanceInKm*data.rate32;
              }
              else if(distanceInKm<=1650) {
                rate=distanceInKm*data.rate33;
              }
              else if(distanceInKm<=1700) {
                rate=distanceInKm*data.rate34;
              }
              else if(distanceInKm<=1750) {
                rate=distanceInKm*data.rate35;
              }
              else if(distanceInKm<=1800) {
                rate=distanceInKm*data.rate36;
              }
              else if(distanceInKm<=1850) {
                rate=distanceInKm*data.rate37;
              }
              else if(distanceInKm<=1900) {
                rate=distanceInKm*data.rate38;
              }
              else if(distanceInKm<=1950) {
                rate=distanceInKm*data.rate39;
              }
              else if(distanceInKm<=2000) {
                rate=distanceInKm*data.rate40;
              }
              else if(distanceInKm<=2050) {
                rate=distanceInKm*data.rate41;
              }else if(distanceInKm<=2100) {
                rate=distanceInKm*data.rate42;
              }
              else if(distanceInKm<=2150) {
                rate=distanceInKm*data.rate43;
              }
              else if(distanceInKm<=2200) {
                rate=distanceInKm*data.rate44;
              }
              else if(distanceInKm<=2250) {
                rate=distanceInKm*data.rate45;
              }
              else if(distanceInKm<=2300) {
                rate=distanceInKm*data.rate46;
              }
              else if(distanceInKm<=2350) {
                rate=distanceInKm*data.rate47;
              }
              else if(distanceInKm<=2400) {
                rate=distanceInKm*data.rate48;
              }
              else if(distanceInKm<=2450) {
                rate=distanceInKm*data.rate49;
              }
              else if(distanceInKm<=2500) {
                rate=distanceInKm*data.rate50;
              }
              else if(distanceInKm<=2500) {
                rate=distanceInKm*data.rate51;
              }
              
              else if(distanceInKm<=2600) {
                rate=distanceInKm*data.rate52;
              }
              else if(distanceInKm<=2650) {
                rate=distanceInKm*data.rate53;
              }
              else if(distanceInKm<=2700) {
                rate=distanceInKm*data.rate54;
              }
              else if(distanceInKm<=2750) {
                rate=distanceInKm*data.rate55;
              }
              else if(distanceInKm<=2800) {
                rate=distanceInKm*data.rate56;
              }
              else if(distanceInKm<=2850) {
                rate=distanceInKm*data.rate57;
              }
              else if(distanceInKm<=2900) {
                rate=distanceInKm*data.rate58;
              }
              else if(distanceInKm<=2950) {
                rate=distanceInKm*data.rate59;
              }
              else if(distanceInKm<=3000) {
                rate=distanceInKm*data.rate60;
              }
       if (rate < 500) {
        rate = 500; // Minimum rate
      }
    }

      const output = document.querySelector('#output') as HTMLDivElement;
      output.innerHTML =
        `<div class="alert-info">
           From: ${request.origin}.<br />
           To: ${request.destination}.<br />
           Driving distance <i class='fas fa-road'></i> : ${result.routes[0].legs[0].distance.text}.<br />
           
            Rate: ${rate} rupees
         </div>`;
      directionsDisplay.setDirections(result);

      this.http.post('https://inspiring-being-405110.el.r.appspot.com/mail/sendmail/third/fulltruck2', {
                email: email,
                number: number,
                name:name,
                distance:distanceInKm,
                from: request.origin,
                to: request.destination,
                rate: rate,
                // Include other necessary data like length, width, height, etc.
              })
              .subscribe(
                (data) => {
                  console.log('Email sent successfully:', data);
                  // Handle the response from the server if needed
                },
                (error) => {
                  console.error('Email sending failed:', error);
                  // Handle the error
                }
              );
        

    } else {
      directionsDisplay.setDirections({ routes: [] });
      this.map.setCenter(this.myLatLng); // Ensure you have access to the 'map' variable.
      const output = document.querySelector('#output') as HTMLDivElement;
      output.innerHTML = "<div class='alert-danger'><i class='fas fa-exclamation-triangle'></i> Could not retrieve driving distance.</div>";
    }
  });
}
 booknow(){

  if (!this.termsAndConditionsChecked) {
    // Display an error message or prevent form submission
    alert('Please accept the Terms and Conditions before proceeding.');
    return;
  }
  this.http.post('https://inspiring-being-405110.el.r.appspot.com/mail/sendmail/third/fulltruck/confirm', {
                email: this.email1,
                number: this.contact1,
                name:this.name1,
                
                
                // Include other necessary data like length, width, height, etc.
              })
              .subscribe(
                (data) => {
                  console.log('Email sent successfully:', data);
                  // Handle the response from the server if needed
                },
                (error) => {
                  console.error('Email sending failed:', error);
                  // Handle the error
                }
              );
             this.showSuccessMessage();
             this.resetForm();
 }

 showSuccessMessage() {
  this.snackBar.open('Your order is successfull .check your email', 'Dismiss', {
    duration: 5000,
  });
}
  resetForm(){
    this.name1='';
    this.contact1='';
    this.email1='';
  }
  
  
}
