import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Addcity } from '../service/Addcity';
import { map } from 'rxjs';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.css']
})
export class AddcityComponent implements OnInit {

  filterState: string = '';
  filterCity: string = '';

  filteredData(): any[] {
    return this.data.filter(item =>
      item.state.toLowerCase().includes(this.filterState.toLowerCase()) &&
      item.city.toLowerCase().includes(this.filterCity.toLowerCase())
    );
  }


  @ViewChild('Addcity') addcity:NgForm;
  editMode:boolean=false;
  editrateid;
  data!: any[];
constructor(private http:HttpClient,private snackBar: MatSnackBar ) {}
  ngOnInit(): void {
    this.fetch();
  }

private url='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Addcity.json'




  
addCity(addcity: Addcity) {
  if (this.addcity.valid) {
    // Check if the city already exists (case-insensitive)
    const cityExists = this.data.some(
      (item) =>
        item.city.toLowerCase() === addcity.city.toLowerCase() &&
        item.state.toLowerCase() === addcity.state.toLowerCase()
    );

    if (cityExists) {
      alert('City already exists. Please enter a unique city.');
    } else {
      if (this.editMode) {
        this.http
          .put<Addcity>(
            'https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Addcity/' +
              this.editrateid +
              '.json',
            addcity
          )
          .subscribe((res) => {
            this.fetch();
            this.resetForm();
            this.snackBar.open('Update successful', 'Close', { duration: 3000 });
          });
      } else {
        this.http
          .post<Addcity>(this.url, addcity)
          .subscribe((res) => {
            this.fetch();
            this.resetForm();
            this.snackBar.open('Add successful', 'Close', { duration: 3000 });
          });
      }
    }
  } else {
    alert('Error: Please enter valid input');
  }
}


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


  
  deletecity(deletid){
if(confirm('do you want to delet')){
  console.log(deletid)
this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Addcity/'+deletid+'.json')
.subscribe(()=>{
  this.fetch();
});
}
  }

  update(updateid, index) {
    this.editMode=true;
    console.log(updateid);
    this.editrateid =updateid;
    console.log(this.data[index]);
    // console.log(this.data[index].rate1);
  
    // Check if rateform is defined and has a form property
    
      this.addcity.setValue({
        state:this.data[index].state,
        city:this.data[index].city
      
    })
  } 

  resetForm() {
    // Reset the form to its initial state
    this.addcity.resetForm();
    this.editMode = false;
    this.editrateid = null;
  }


}
