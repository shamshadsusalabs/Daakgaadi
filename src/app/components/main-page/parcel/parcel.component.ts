import { Component, ElementRef,HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/_services/user.service';
import { EmailService } from 'src/app/_services/email.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { BookconfirmService } from 'src/app/_services/confirmbook.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmformComponent } from '../confirmform/confirmform.component';
import { AddRoute } from 'src/app/example-module1/service/addroute';
import { map } from 'rxjs';

@Component({
  selector: 'app-parcel',
  templateUrl: './parcel.component.html',
  styleUrls: ['./parcel.component.css']
})
export class ParcelComponent  {

  data1: any[];
  selectedData: any[] = [];
  pselectedState1: string = ''; // Track the selected pickup state
pselectedCity1: string = ''; // Track the selected pickup city
pfilteredCities1: any[] = [];

onStateChange1() {
  // Filter pickup cities based on the selected pickup state and exclude the selected drop city
  this.pfilteredCities1 = this.data1
    .filter(city => city.pstate === this.pselectedState1 && city.dcity !== this.dselectedCity1)
    .filter((value, index, self) => self.findIndex(c => c.pcity === value.pcity) === index);
}
dselectedState1: string = ''; // Track the selected drop state
dselectedCity1: string = ''; // Track the selected drop city
dfilteredCities1: any[] = [];
donStateChange1() {
  console.log('Selected Pickup City:', this.pselectedCity1);
  console.log('Selected Drop City:', this.dselectedCity1);
  
  this.dfilteredCities1 = this.data1
    .filter(city => city.dstate === this.dselectedState1 && city.pcity === this.pselectedCity1)
    .filter((value, index, self) => self.findIndex(c => c.dcity === value.dcity) === index);
    this.selectedData = this.data1
    .filter(city => city.pcity === this.pselectedCity1 && city.dcity === this.dselectedCity1);
    console.log(this.selectedData);
    
}


private url1='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Addroute.json'
  
  
  

  fetch1(){
    this.http.get<AddRoute>(this.url1).pipe(map(resData=>{
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



  /* my code */
  showForm: boolean = false;
  bookingForm: FormGroup;
  

  toggleForm() {
    this.showForm = !this.showForm;
  } 
  
  

  termsAndConditionsChecked: boolean = false;
  showForm1: boolean = false;
  toggleForm1() {
    this.showForm1 = !this.showForm1;
  }  



/*--*/
  
  generatedId:String='';
  actual :any;
  
  generatedEstimatedId:String='';

  generatedLength:String='';
  generatedBreadth:String='';
  generatedHeight:String='';
  generatedMultiplier:String='';
  routetype:String='';

  boxno =[];

  generatedActual:String='';
  totalestimate : any;
  
  routeid :any;
  lat1: any;
  isSmallScreen: boolean;


   constructor(private elementRef: ElementRef,
    public dialog: MatDialog,
    private transporterService: UserService,

    private http: HttpClient,private firebaseService:EmailService,private fb: FormBuilder, private cb:BookconfirmService,private confirboomemail: BookconfirmService,private snackBar: MatSnackBar){

      this.fetch1();
    }

  

    

    
 
  boxess: any[] = [
    { length: 0, width: 0, height: 0, actualWeight: 0, numBoxes: 1, rate: 0 }
  ];

  totalActualWeight: string='';
  totalRate:number=0;

  email1:string='';
    number1:string='';
selectedproduct:string=''

  calculateEstimated(box: any) {
   var email=this.email1;
   var number=this.number1;
   var selectedproduct =this.selectedproduct;
   if(email=='' || number=='' || selectedproduct==''){
     alert("please fill email and number")
     return;
   }
console.log(box);
    let cft = 6;
    const volumetricFactor = 1728;
    const volumetricWeight = (box.length * box.width * box.height * cft * box.numBoxes) / volumetricFactor;
    box.volumetricWeight = volumetricWeight;

    // Calculate rates based on both volumetric and actual weights
    const rateBasedOnVolumetric = this.calculateRate(box.actualWeight * box.numBoxes, volumetricWeight);
    const rateBasedOnActual = this.calculateRate(box.actualWeight * box.numBoxes, volumetricWeight);

    // Choose the higher rate between rateBasedOnVolumetric and rateBasedOnActual
    box.rate = Math.max(rateBasedOnVolumetric, rateBasedOnActual);

    

    this.updateTotalValues();

    
      const dataToSave = {
        youremail:this.email1,
        yournumbers:this.number1,
        selectedproduct:this.selectedproduct,
      length: box.length,
        width: box.width,
        height: box.height,
        actualWeight:box.actualWeight,
        volumetricWeight: box.volumetricWeight,
        rate: box.rate,
        totalActualWeight:this.totalActualWeight,
        totalRate:this.totalRate.toString(),
        numBoxes: box.numBoxes,



        
      };
    
      // this.firebaseService.addBoxDetail(dataToSave).then((docRef) => {
      //   console.log('Document added with ID: ', docRef.id);
      // });
      
            
      
      this.firebaseService.sendEmail(this.email1, 'Box details', JSON.stringify(dataToSave),this.number1,dataToSave.selectedproduct,dataToSave.length,dataToSave.width,dataToSave.height,dataToSave. actualWeight,dataToSave.volumetricWeight,dataToSave.rate,  this.totalActualWeight,this.totalRate.toString(),dataToSave.numBoxes)
      .subscribe(response => {
        console.log('Email sent successfully');
        // Handle the response as needed
      });
      
      

      
    }
  

    
    
    
    odaAmountAdded: boolean = false;

    calculateRate(weight: number, volumetricWeight: number) {
      const actualWeightRate = this.selectedData[0].amount * weight;
      const volumetricWeightRate = this.selectedData[0].amount * volumetricWeight;
    
      // Choose the higher rate between actualWeightRate and volumetricWeightRate
      let finalRate = Math.max(actualWeightRate, volumetricWeightRate);
    
      if (this.selectedData[0].type === 'oda' && !this.odaAmountAdded) {
        // Add ODA charge
        finalRate += parseFloat(this.selectedData[0].odaamount);
        // Set the flag to true to indicate that odaamount has been added
        this.odaAmountAdded = true;
      }
    
      return finalRate;
    }
    
    
  addBox() {
    const newBox = { length: 0, width: 0, height: 0, actualWeight: 0, numBoxes: 1, rate: 0 };
    this.boxess.push(newBox);
    this.calculateEstimated(newBox);
  }

  removeBox(index: number) {
  
    this.boxess.splice(index, 1);
    this.updateTotalValues();
  }

  updateTotalValues() {
    this.totalActualWeight = this.boxess.reduce((total, box) => total + (box.actualWeight * box.numBoxes), 0);
    this.totalRate = this.boxess.reduce((total, box) => total + box.rate, 0);
  
    // Set a minimum total rate of 500
    if (this.totalRate < 500) {
      this.totalRate = 500;
    }
  }

  /*myupdatedcode*/

  
  

  /* --*/

    /*my code */

    

ngOnInit(){
   
  
  this.bookingForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    paddress: ['', Validators.required],
    daddress: ['', Validators.required],
    date: ['', Validators.required],
    anumber: ['',Validators.required],
    md: ['',Validators.required],
    gv: ['',Validators.required]
  });
}



onCheckboxChange(event: any) {
  this.termsAndConditionsChecked = event.target.checked;
}

submitForm(book:any) {


  if (!this.termsAndConditionsChecked) {
    // Display an error message or prevent form submission
    alert('Please accept the Terms and Conditions before proceeding.');
    return;
  }
  

  
  if (this.bookingForm.valid) {


    
    const formData = this.bookingForm.value;
    
      
      this.http
          .post('https://inspiring-being-405110.el.r.appspot.com/mail/sendmail/second/booking',formData)
          .subscribe(
            (response) => {
              console.log('Email sent successfully', response);
              // You can add further logic here, like showing a confirmation message.
            },
            (error) => {
              console.error('Failed to send email', error);
              // Handle errors here.
            }
          );
          
          this.showSuccessMessage();
          this.bookingForm.reset(); 
        
      
  



}

  /*--*/}

  showSuccessMessage() {
    this.snackBar.open('Your order is successful', 'Dismiss', {
      duration: 5000,
    });
  }
  
    
}
function addbox() {
  throw new Error('Function not implemented.');
}

function removebox() {
  throw new Error('Function not implemented.');
}

function calculatePrice(i: any) {
  throw new Error('Function not implemented.');
}

function calculateMeasuredWeight() {
  throw new Error('Function not implemented.');
}

function total() {
  throw new Error('Function not implemented.');
}

function isValidInput(length: number, number: any, breadth: any, number1: any, height: any, number2: any) {
  throw new Error('Function not implemented.');
}

function toggleContainer(containerId: any, string: any) {
  throw new Error('Function not implemented.');
}

function getEstimate() {
  throw new Error('Function not implemented.');
}

function calculateEstimate(pickupLocation: any, string: any, dropLocation: any, string1: any) {
  throw new Error('Function not implemented.');
}

function updateSelectedCity(event: Event, Event: { new(type: string, eventInitDict?: EventInit): Event; prototype: Event; readonly NONE: 0; readonly CAPTURING_PHASE: 1; readonly AT_TARGET: 2; readonly BUBBLING_PHASE: 3; }) {
  throw new Error('Function not implemented.');
}

function toggleDropdown() {
  throw new Error('Function not implemented.');
}

function selectOption(option: any, string: any) {
  throw new Error('Function not implemented.');
}

function sendConfirmationEmail() {
  throw new Error('Function not implemented.');
}

function updateStatus() {
  throw new Error('Function not implemented.');
}

function onResize(event: Event, any: any) {
  throw new Error('Function not implemented.');
}

function toggleNavbar() {
  throw new Error('Function not implemented.');
}

function closeNavbar() {
  throw new Error('Function not implemented.');
}

function openAlertDialog() {
  throw new Error('Function not implemented.');
}








