/// <reference types="googlemaps" />
import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';
import { Rate } from 'src/app/example-module1/service/interface';


declare var google: any;
@Component({
  selector: 'app-bookheavy1',
  templateUrl: './bookheavy1.component.html',
  styleUrls: ['./bookheavy1.component.css']
})
export class Bookheavy1Component implements OnInit {

  generatedId:String='';
  actual :any;
  
  generatedEstimatedId:String='';

  generatedLength:String='';
  generatedBreadth:String='';
  generatedHeight:String='';
  generatedMultiplier:String='';
  generatedActual:String='';
  showForm: boolean;
  
  
   constructor(private elementRef: ElementRef,
    private http: HttpClient,private snackBar: MatSnackBar) {
      this.isSmallScreen = window.innerWidth <= 768;
      this.type = localStorage.getItem('type');
    
  }

  iscalculated:Boolean;
  isconfirm:Boolean;
  showTable: boolean = false;
  
  email: string;
  contact: string; 
   length: number;
  breadth: number;
  name:any;
  type :any;
  area:any;
  height: number;
  multiplier: number;
  estimateResult: number;
  pickupLocation: string = '';
  dropLocation: string = '';
  selectedCity: string = '';
  isContainer2Hidden: boolean = true;
  isDropdownOpen: boolean = false;
  estimateId: string = ''; 
  generatedEstimateId: string;
  showResult = false;
  boxes: number = 1;
  price: number;
  finalprice: number = 0;
from:string;
to:string;

termsAndConditionsChecked: boolean = false;
  showForm1: boolean = false;
  toggleForm() {
    this.showForm1 = !this.showForm1;
  } 


data4!: any[];
private url4='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/H20f.json'

fetchrate4(){
  this.http.get<Rate>(this.url4).pipe(map(resData=>{
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
    this.data4 = res
  })
}





private myLatLng: { lat: number; lng: number } = { lat: 38.3460, lng: -0.4907 };
private map!: google.maps.Map;

ngOnInit() {
  this.initMap();
  this.initAutocomplete();
  this.fetchrate4();
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
        
      for(let data of this.data4){
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
       if (rate < 2000) {
        rate = 2000; // Minimum rate
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

      this.http.post('https://inspiring-being-405110.el.r.appspot.com/mail/sendmail/third/fulltruck5', {
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
  
  distance(){

    // const headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Content-Type');
    // headers.append('Access-Control-Allow-Methods', 'GET');
    // headers.append('Access-Control-Allow-Origin', '*');

    
    // this.http.get('http://maps.googleapis.com/maps/api/distancematrix/json?destinations=delhi&origins=mumbai&key=AIzaSyBRmqVtkujBc7IabQceqEuzZoAZ22GxGlE' ,  {headers: headers}).subscribe(
    //   (response: any) => {
        

    //     alert(response);
        
        
    //   // Log the generated estimateId to check its value

    //   // Prepare the email text
     
    //   },
    //   (error) => {
    //     alert("Error in Generating the Estimate")
    //     console.error('Error calculating estimate:', error);
    //   }
    // );


      let key = "AIzaSyBRmqVtkujBc7IabQceqEuzZoAZ22GxGlE";
      let url = `https://maps.googleapis.com/maps/api/distancematrix/json?destinations=Delhi&origins=Mumbai&units=imperial&key=${key}`;
      fetch(url, {
        method: 'GET',
      
        mode: 'no-cors' ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '0.0.0.0/0',
  'Access-Control-Allow-Headers':'X-Requested-With,content-type', 
    // Set to true if you need the website to in
        },
    
  }, )
        .then((res) =>{res
        console.log(res);
        }
        );

        

  }
 
  
  
   
  calculateEstimated(): void {


    // const boxes= document.getElementById('boxes')as HTMLInputElement;
    

      
      // const lengthValue = lengthInput.valueAsNumber;
      // const breadthValue = breadthInput.valueAsNumber;
      // const heightValue = heightInput.valueAsNumber;
      // const BoxesValue = boxes.valueAsNumber;
      //const multiplierValue = Number(multiplierInput.value);
      
      
    
    //  if (this.isValidInput(lengthValue, breadthValue, heightValue)) {

        // const volume = (lengthValue * breadthValue * heightValue) / 1728;
        // const weight = volume*6;
        // const finalWeight = Math.max(weight,ActualValue);
        // const finalprice= finalWeight*BoxesValue;

        // this.estimateResult = isNaN(finalprice) ? 0 : finalprice;
        // console.log(finalprice);
       
        // this.calculatePrice();
        // console.log('Price:', this.price);
  
        var type = localStorage.getItem("type");

        this.showTable = true;
        // Send the estimate data to the server to store in MongoDB
        const estimateData = {
          name : this.name,
          email: this.email,
          contact: this.contact, 
          addres : this.area,
          type : type,
        
        };
        
        console.log(estimateData);

    
        this.http.post<any>('https://trekkowave.el.r.appspot.com/api/addtruck', estimateData).subscribe(
          (response: any) => {
            

            alert("successfully Generated Estimate");
            this.generatedId=response._id;
            console.log(this.generatedId)
            this.generatedEstimatedId=response.estimateResult;
            this.generatedLength=response.length;
            this.generatedBreadth=response.breadth;
            this.generatedHeight=response.height;
            this.generatedMultiplier=response.multiplier;
            this.generatedActual=response.actualweight;
            
          // Log the generated estimateId to check its value
  
          // Prepare the email text
         
          },
          (error) => {
            alert("Error in Generating the Estimate")
            console.error('Error calculating estimate:', error);
          }
        );
    //  }
      
      
    }
    
    
    calculatePrice() {
     console.log("clicked");
      // Retrieve the user inputs
      const pickupLocation: string = (document.getElementById('pickup') as HTMLSelectElement).value;
      const dropLocation: string = (document.getElementById('drop') as HTMLSelectElement).value;
      
  console.log(this.estimateResult);
      switch (pickupLocation) {
        case 'delhi':
          switch (dropLocation) {
            case 'delhi':
              this.price = this.estimateResult*10;
              break;
              case 'agra':
                this.price =this.estimateResult*20;
              break;
              case 'haryana':
                this.price = this.estimateResult*30;
              break;
            // Add more drop location cases as needed
            default:
              this.price = 0; // Handle unknown drop locations
              break;
          }
          break;
        // Add more pickup location cases as needed
        case 'agra':

        switch (dropLocation) {
          case 'delhi':
            this.price = this.estimateResult * 20;
            break;
          case 'agra':
            this.price = this.estimateResult * 10;
            break;
          case 'haryana':
            this.price = this.estimateResult * 40;
            break;
          default:
            this.price = 0; // Handle unknown drop locations
            break;
        }
        break;
              
              case 'haryana':
                switch (dropLocation) {
                  case 'delhi':
                    this.price = this.estimateResult * 30;
                    break;
                  case 'agra':
                    this.price = this.estimateResult * 40;
                    break;
                  case 'haryana':
                    this.price = this.estimateResult * 10;
                    break;
                  default:
                    this.price = 0; // Handle unknown drop locations
                    break;
                }
                break;
              default:
                this.price = 0; // Handle unknown pickup locations
                break;
            }
            
    }
   

    
  
    calculateMeasuredWeight(): number {
      // Logic to calculate the measured weight
      // Implement your own logic or use a predefined formula
      // For example, you can prompt the user to enter the measured weight or calculate it based on other factors
      return 0; // Replace with your actual calculated weight
    }
  
    isValidInput(length: number, breadth: number, height: number): boolean {
      return (
        typeof length === 'number' &&
        typeof breadth === 'number' &&
        typeof height === 'number' &&
        !isNaN(length) &&
        !isNaN(breadth) &&
        !isNaN(height)
      );
      // Add your validation logic here if needed
      return true;
    }
  
    toggleContainer(containerId: string) {
      this.isContainer2Hidden = !this.isContainer2Hidden;
    }
  
    getEstimate() {
      const estimate = this.calculateEstimate(this.pickupLocation, this.dropLocation);
      alert("Estimated Price: $" + estimate);
    }
  
    calculateEstimate(pickupLocation: string, dropLocation: string): number {
      return 100; // Sample estimate value, modify as per your requirement
    }
  
    updateSelectedCity(event: Event) {
      const checkbox = event.target as HTMLInputElement;
      this.selectedCity = checkbox.value;
      this.isContainer2Hidden = true; // Close the second container
    }
    toggleDropdown(): void {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  
    selectOption(option: string): void {
      const selectTrigger = document.querySelector('.select-trigger') as HTMLElement;
      selectTrigger.innerText = option;
      this.toggleDropdown();
    }
    sendConfirmationEmail() {
      if(!this.generatedId){
        alert('please submit from to genrte id')
      }
      if(!this.generatedEstimatedId){
        alert('please submit from to genrte estimatedid')
      }
      const emailData = {
        email: this.email,
        id:this.generatedId,
        estimateResult:this.generatedEstimatedId,
        length:this.generatedLength,
        breadth:this.generatedBreadth,
        height:this.generatedHeight,
        multiplier:this.generatedMultiplier,
        actualWeight:this.generatedActual
  
  
        // Pass the email text with estimate details
      };
  
      this.http.post<any>('https://trekkowave.el.r.appspot.com/api/estimate', emailData).subscribe(
        (response) => {
          this.updateStatus();
          alert("Email sent Successfully")
          console.log('Confirmation email sent:', response);
        },
        (error) => {
          console.error('Error sending confirmation email:', error);
        }
      );
    }

    updateStatus() {
      this.http.put<any>(`https://trekkowave.el.r.appspot.com/api/reest/${this.generatedId}/isconfirm`, {}).subscribe(
        (response) => {
          console.log('Confirmation status updated successfully');
          // Handle the response or update any necessary UI elements
        },
        (error) => {
          console.error('Error updating confirmation status:', error);
          // Handle the error or show an error message to the user
        }
      );
    }
    isNavbarOpen: boolean = false;
    isSmallScreen: boolean = false;
  
    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      // Update isSmallScreen based on window width
      this.isSmallScreen = window.innerWidth <= 768;
    }
  
  
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    }
  
    closeNavbar() {
      this.isNavbarOpen = false;
    }


}





