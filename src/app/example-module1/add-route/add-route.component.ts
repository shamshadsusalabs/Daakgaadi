
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddRoute } from '../service/addroute';
import { Addcity } from '../service/Addcity';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.css']
})
export class AddRouteComponent implements OnInit {
 
 


  pselectedState: string = ''; // Track the selected state
  pselectedCity: string = ''; // Track the selected city
  pfilteredCities: any[] = [];
  onStateChange() {
    // Filter cities based on the selected state
    this.pfilteredCities = this.data.filter(city => city.state === this.pselectedState);
}

dselectedState: string = ''; // Track the selected state
dselectedCity: string = ''; // Track the selected city
dfilteredCities: any[] = [];
donStateChange() {
  // Filter cities based on the selected state
  this.dfilteredCities = this.data.filter(city => city.state === this.dselectedState);
}


selectedShipmentType: string = 'standard'; // Default selection
additionalInfo: string = '';

  toggleAdditionalInput() {
    
  }


  @ViewChild('AddRoute') addroute:NgForm;
  editMode:boolean=false;
  editrateid;
  data!: any[];
  data1: any[];
  constructor(private http:HttpClient,private snackBar: MatSnackBar,private changeDetectorRef: ChangeDetectorRef) {
    
   }

  ngOnInit(): void {
   this.fetch();
   this.fetch1();
  }
  
  private url='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Addcity.json'
  fetch(){
    this.http.get<Addcity>(this.url).pipe(map(resData=>{
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
      this.data = res
    })
  }





  private url1='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Addroute.json'
  
  
  addRoute(route: AddRoute) {
    if (this.addroute.valid) {
      // Check for duplicate route based on state and city
      const isDuplicate = this.data1.some(existingRoute =>
        existingRoute.pstate === route.pstate &&
        existingRoute.pcity === route.pcity &&
        existingRoute.dstate === route.dstate &&
        existingRoute.dcity === route.dcity
      );
  
      if (isDuplicate) {
        alert('Duplicate route found. Please enter a unique route.');
        return;
      }
  
      if (this.editMode) {
        this.http.put<AddRoute>(`https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Addroute/${this.editrateid}.json`, route)
          .subscribe((res) => {
            this.fetch1();
            this.resetForm();
            this.snackBar.open('Update successful', 'Close', { duration: 3000 });
          });
      } else {
        this.http.post<AddRoute>(this.url1, route)
          .subscribe((res) => {
            this.fetch1();
            this.resetForm();
            this.snackBar.open('Add successful', 'Close', { duration: 3000 });
          });
      }
    } else {
      alert('Error: Please enter valid data.');
    }
  }
  

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
      this.data1 = res;
      this.changeDetectorRef.detectChanges();
    })
  }


  
  deletroute(deletid){
if(confirm('do you want to delet')){
  console.log(deletid)
this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Addroute/'+deletid+'.json')
.subscribe(()=>{
  this.fetch1();
});
}
  }

  updateroute(updateid, index) {
    this.editMode = true;
    console.log(updateid);
    this.editrateid = updateid;
    console.log(this.data1[index]);
  
    this.addroute.setValue({
      pstate: this.data1[index].pstate, 
      pcity: this.data1[index].pcity,  // <- Assuming this is a string
      dstate: this.data1[index].dstate,
      dcity: this.data1[index].dcity,  // <- Assuming this is a string
      amount: this.data1[index].amount,
      days: this.data1[index].days,
      type: this.data1[index].type,
      odaamount: this.data1[index].odaamount,
    });
  }
  resetForm() {
    // Reset the form to its initial state
    this.addroute.resetForm();
    this.editMode = false;
    this.editrateid = null;
  }

  

  filterText: string ='';
  get filteredData(): any[] {
    return this.data1.filter(route => {
      return (
        (route.pstate?.toLowerCase() || '').includes(this.filterText?.toLowerCase() || '') ||
        (route.pcity?.toLowerCase() || '').includes(this.filterText?.toLowerCase() || '') ||
        (route.dstate?.toLowerCase() || '').includes(this.filterText?.toLowerCase() || '') ||
        (route.dcity?.toLowerCase() || '').includes(this.filterText?.toLowerCase() || '') ||
        (route.amount?.toString() || '').includes(this.filterText?.toLowerCase() || '') ||
        (route.days?.toString() || '').includes(this.filterText?.toLowerCase() || '') ||
        (route.type?.toLowerCase() || '').includes(this.filterText?.toLowerCase() || '') ||
        (route.odaamount?.toString() || '').includes(this.filterText?.toLowerCase() || '')
      );
    });
  }
  
  
}