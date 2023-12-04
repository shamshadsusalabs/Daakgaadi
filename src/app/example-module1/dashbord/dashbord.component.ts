import { Component, OnInit, ViewChild } from '@angular/core';

import {   NgForm } from '@angular/forms';


import { map,  } from 'rxjs/operators';
 import { Rate } from '../service/interface';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  
 editMode:boolean=false;
 editrateid;

  @ViewChild('RateForm') rateform:NgForm;
  data!: any[];

  ngOnInit(){
    this.fetchrate();
    this.fetchrate1();
    this.fetchrate2();
    this.fetchrate3();
    this.fetchrate4();
    this.fetchrate5();
    this.fetchrate6();
  }


  private url='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/TataAcerate.json'
  constructor(private http:HttpClient,private snackBar: MatSnackBar ) {}
  
  addRate(rate:Rate){
    if(this.rateform.valid){
      if(this.editMode){
          // console.log('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/TataAcerate/'+this.editrateid+'.json');
          this.http.put<Rate>('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/TataAcerate/'+this.editrateid+'.json',rate).subscribe((res)=>{
            // console.log(res);
            this.fetchrate();
            this.resetForm();
            this.snackBar.open('Update successful', 'Close', { duration: 3000 });
          })
      }
      else{
    //     console.log(rate);
    // this.http.post<Rate>(this.url,rate).subscribe((res)=>{
    //   console.log(res);
    //   this.fetchrate();
    //   this.resetForm();
    //   this.snackBar.open('Add successful', 'Close', { duration: 3000 });
    // })
      }
    

  }
  else{
    alert("error please enter number only")
  }

  }

  fetchrate(){
    this.http.get<Rate>(this.url).pipe(map(resData=>{
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


  
//   deletrate(deletid){
// if(confirm('do you want to delet')){
//   console.log(deletid)
// this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/TataAcerate/'+deletid+'.json')
// .subscribe(()=>{
//   this.fetchrate();
// });
// }
//   }

  updaterate(updateid, index) {
    this.editMode=true;
    console.log(updateid);
    this.editrateid =updateid;
    console.log(this.data[index]);
    // console.log(this.data[index].rate1);
  
    // Check if rateform is defined and has a form property
    
      this.rateform.setValue({
        
      rate1:this.data[index].rate1,
     rate2:this.data[index].rate2,
    rate3: this.data[index].rate3,
    rate4:this.data[index].rate4,
    rate5:this.data[index].rate5,
    rate6:this.data[index].rate6,
    rate7: this.data[index].rate7,
    rate8:this.data[index].rate8,
     rate9:this.data[index].rate9,
    rate10:this.data[index].rate10,
    rate11: this.data[index].rate11,
    rate12:this.data[index].rate12,
    rate13: this.data[index].rate13,
    rate14:this.data[index].rate14,
    rate15: this.data[index].rate15,
    rate16:this.data[index].rate16,
    rate17: this.data[index].rate17,
    rate18:this.data[index].rate18,
    rate19:this.data[index].rate19,
    rate20:this.data[index].rate20,
    
    rate21:this.data[index].rate21,
    rate22:this.data[index].rate22,
    rate23: this.data[index].rate23,
    rate24: this.data[index].rate24,
    rate25:this.data[index].rate25,
    rate26:this.data[index].rate26,
    rate27:this.data[index].rate27,
    rate28:this.data[index].rate28,
    rate29: this.data[index].rate29,
    rate30:this.data[index].rate30,
    rate31: this.data[index].rate31,
    rate32:this.data[index].rate32,
    rate33: this.data[index].rate33,
    rate34:this.data[index].rate34,
    rate35: this.data[index].rate35,
    rate36:this.data[index].rate36,
    rate37: this.data[index].rate37,
    rate38:this.data[index].rate38,
    rate39:this.data[index].rate39,
    rate40:this.data[index].rate40,
    rate41:this.data[index].rate41,
    rate42:this.data[index].rate42,
    rate43: this.data[index].rate43,
    rate44:this.data[index].rate44,
    rate45: this.data[index].rate45,
    rate46:this.data[index].rate46,
    rate47:this.data[index].rate47,
    rate48:this.data[index].rate48,
    rate49: this.data[index].rate49,
    rate50:this.data[index].rate50,
    rate51:this.data[index].rate51,
    rate52:this.data[index].rate52,
    rate53:this.data[index].rate53,
    rate54:this.data[index].rate54,
    rate55:this.data[index].rate55,
    rate56:this.data[index].rate56,
    rate57:this.data[index].rate57,
    rate58:this.data[index].rate58,
    rate59:this.data[index].rate59,
    rate60:this.data[index].rate60,
    })
  } 

  resetForm() {
    // Reset the form to its initial state
    this.rateform.resetForm();
    this.editMode = false;
    this.editrateid = null;
  }









  editMode1:boolean=false;
 editrateid1;

  @ViewChild('RateForm1') rateform1:NgForm;
  data1!: any[];




  private url1='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Boloro.json'
  
  
  addRate1(rate:Rate){
    if(this.rateform1.valid){
      if(this.editMode1){
          // console.log('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/'+this.editrateid+'.json');
          this.http.put<Rate>('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Boloro/'+this.editrateid1+'.json',rate).subscribe((res)=>{
            // console.log(res);
            this.fetchrate1();
            this.resetForm1();
            this.snackBar.open('Update successful', 'Close', { duration: 3000 });
          })
      }
      else{
    //     console.log(rate);
    // this.http.post<Rate>(this.url1,rate).subscribe((res)=>{
    //   console.log(res);
    //   this.fetchrate1();
    //   this.resetForm1();
    //   this.snackBar.open('Add successful', 'Close', { duration: 3000 });
    // })

      }
    

  }
  else{
    alert("error please enter number only")
  }

  }

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


  
//   deletrate2(deletid){
// if(confirm('do you want to delet')){
//   console.log(deletid)
// this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Boloro/'+deletid+'.json')
// .subscribe(()=>{
//   this.fetchrate();
// });
// }
//   }

  updaterate1(updateid, index) {
    this.editMode1=true;
    console.log(updateid);
    this.editrateid1 =updateid;
    console.log(this.data1[index]);
    // console.log(this.data[index].rate1);
  
    // Check if rateform is defined and has a form property
    
      this.rateform1.setValue({
        
      rate1:this.data1[index].rate1,
     rate2:this.data1[index].rate2,
    rate3: this.data1[index].rate3,
    rate4:this.data1[index].rate4,
    rate5:this.data1[index].rate5,
    rate6:this.data1[index].rate6,
    rate7: this.data1[index].rate7,
    rate8:this.data1[index].rate8,
     rate9:this.data1[index].rate9,
    rate10:this.data1[index].rate10,
    rate11: this.data1[index].rate11,
    rate12:this.data1[index].rate12,
    rate13: this.data1[index].rate13,
    rate14:this.data1[index].rate14,
    rate15: this.data1[index].rate15,
    rate16:this.data1[index].rate16,
    rate17: this.data1[index].rate17,
    rate18:this.data1[index].rate18,
    rate19:this.data1[index].rate19,
    rate20:this.data1[index].rate20,
    
    rate21:this.data1[index].rate21,
    rate22:this.data1[index].rate22,
    rate23: this.data1[index].rate23,
    rate24: this.data1[index].rate24,
    rate25:this.data1[index].rate25,
    rate26:this.data1[index].rate26,
    rate27:this.data1[index].rate27,
    rate28:this.data1[index].rate28,
    rate29: this.data1[index].rate29,
    rate30:this.data1[index].rate30,
    rate31: this.data1[index].rate31,
    rate32:this.data1[index].rate32,
    rate33: this.data1[index].rate33,
    rate34:this.data1[index].rate34,
    rate35: this.data1[index].rate35,
    rate36:this.data1[index].rate36,
    rate37: this.data1[index].rate37,
    rate38:this.data1[index].rate38,
    rate39:this.data1[index].rate39,
    rate40:this.data1[index].rate40,
    rate41:this.data1[index].rate41,
    rate42:this.data1[index].rate42,
    rate43: this.data1[index].rate43,
    rate44:this.data1[index].rate44,
    rate45: this.data1[index].rate45,
    rate46:this.data1[index].rate46,
    rate47:this.data1[index].rate47,
    rate48:this.data1[index].rate48,
    rate49: this.data1[index].rate49,
    rate50:this.data1[index].rate50,
    rate51:this.data1[index].rate51,
    rate52:this.data1[index].rate52,
    rate53:this.data1[index].rate53,
    rate54:this.data1[index].rate54,
    rate55:this.data1[index].rate55,
    rate56:this.data1[index].rate56,
    rate57:this.data1[index].rate57,
    rate58:this.data1[index].rate58,
    rate59:this.data1[index].rate59,
    rate60:this.data1[index].rate60,
    })
  } 

  resetForm1() {
    // Reset the form to its initial state
    this.rateform1.resetForm();
    this.editMode1 = false;
    this.editrateid1 = null;
  }




  editMode2:boolean=false;
 editrateid2;

  @ViewChild('RateForm2') rateform2:NgForm;
  data2!: any[];




  private url2='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Canter.json'
  
  
  addRate2(rate:Rate){
    if(this.rateform2.valid){
      if(this.editMode2){
          // console.log('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/TataAcerate/'+this.editrateid+'.json');
          this.http.put<Rate>('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Canter/'+this.editrateid2+'.json',rate).subscribe((res)=>{
            // console.log(res);
            this.fetchrate2();
            this.resetForm2();
            this.snackBar.open('Update successful', 'Close', { duration: 3000 });
          })
      }
      else{
    //     console.log(rate);
    // this.http.post<Rate>(this.url2,rate).subscribe((res)=>{
    //   console.log(res);
    //   this.fetchrate2();
    //   this.resetForm2();
    //   this.snackBar.open('Add successful', 'Close', { duration: 3000 });
    // })

      }
    

  }
  else{
    alert("error please enter number only")
  }

  }

  fetchrate2(){
    this.http.get<Rate>(this.url2).pipe(map(resData=>{
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
      this.data2 = res
    })
  }


  
//   deletrate2(deletid){
// if(confirm('do you want to delet')){
//   console.log(deletid)
// this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Canter/'+deletid+'.json')
// .subscribe(()=>{
//   this.fetchrate2();
// });
// }
//   }

  updaterate2(updateid, index) {
    this.editMode2=true;
    console.log(updateid);
    this.editrateid2 =updateid;
    console.log(this.data2[index]);
    // console.log(this.data[index].rate1);
  
    // Check if rateform is defined and has a form property
    
      this.rateform2.setValue({
        
      rate1:this.data2[index].rate1,
     rate2:this.data2[index].rate2,
    rate3: this.data2[index].rate3,
    rate4:this.data2[index].rate4,
    rate5:this.data2[index].rate5,
    rate6:this.data2[index].rate6,
    rate7: this.data2[index].rate7,
    rate8:this.data2[index].rate8,
     rate9:this.data2[index].rate9,
    rate10:this.data2[index].rate10,
    rate11: this.data2[index].rate11,
    rate12:this.data2[index].rate12,
    rate13: this.data2[index].rate13,
    rate14:this.data2[index].rate14,
    rate15: this.data2[index].rate15,
    rate16:this.data2[index].rate16,
    rate17: this.data2[index].rate17,
    rate18:this.data2[index].rate18,
    rate19:this.data2[index].rate19,
    rate20:this.data2[index].rate20,
    
    rate21:this.data2[index].rate21,
    rate22:this.data2[index].rate22,
    rate23: this.data2[index].rate23,
    rate24: this.data2[index].rate24,
    rate25:this.data2[index].rate25,
    rate26:this.data2[index].rate26,
    rate27:this.data2[index].rate27,
    rate28:this.data2[index].rate28,
    rate29: this.data2[index].rate29,
    rate30:this.data2[index].rate30,
    rate31: this.data2[index].rate31,
    rate32:this.data2[index].rate32,
    rate33: this.data2[index].rate33,
    rate34:this.data2[index].rate34,
    rate35: this.data2[index].rate35,
    rate36:this.data2[index].rate36,
    rate37: this.data2[index].rate37,
    rate38:this.data2[index].rate38,
    rate39:this.data2[index].rate39,
    rate40:this.data2[index].rate40,
    rate41:this.data2[index].rate41,
    rate42:this.data2[index].rate42,
    rate43: this.data2[index].rate43,
    rate44:this.data2[index].rate44,
    rate45: this.data2[index].rate45,
    rate46:this.data2[index].rate46,
    rate47:this.data2[index].rate47,
    rate48:this.data2[index].rate48,
    rate49: this.data2[index].rate49,
    rate50:this.data2[index].rate50,
    rate51:this.data2[index].rate51,
    rate52:this.data2[index].rate52,
    rate53:this.data2[index].rate53,
    rate54:this.data2[index].rate54,
    rate55:this.data2[index].rate55,
    rate56:this.data2[index].rate56,
    rate57:this.data2[index].rate57,
    rate58:this.data2[index].rate58,
    rate59:this.data2[index].rate59,
    rate60:this.data2[index].rate60,
    })
  } 

  resetForm2() {
    // Reset the form to its initial state
    this.rateform2.resetForm();
    this.editMode2 = false;
    this.editrateid2 = null;
  }


   editMode3:boolean=false;
  editrateid3;
 
   @ViewChild('RateForm3') rateform3:NgForm;
   data3!: any[];
 
 
 
 
   private url3='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Hcanter.json'
   
   
   addRate3(rate:Rate){
     if(this.rateform3.valid){
       if(this.editMode3){
           // console.log('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Hcanter/'+this.editrateid+'.json');
           this.http.put<Rate>('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Hcanter/'+this.editrateid3+'.json',rate).subscribe((res)=>{
             // console.log(res);
             this.fetchrate3();
             this.resetForm3();
             this.snackBar.open('Update successful', 'Close', { duration: 3000 });
           })
       }
       else{
    //      console.log(rate);
    //  this.http.post<Rate>(this.url3,rate).subscribe((res)=>{
    //    console.log(res);
    //    this.fetchrate3();
    //    this.resetForm3();
    //    this.snackBar.open('Add successful', 'Close', { duration: 3000 });
    //  })
 
       }
     
 
   }
   else{
     alert("error please enter number only")
   }
 
   }
 
   fetchrate3(){
     this.http.get<Rate>(this.url3).pipe(map(resData=>{
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
       this.data3 = res
     })
   }
 
 
   
//    deletrate3(deletid){
//  if(confirm('do you want to delet')){
//    console.log(deletid)
//  this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/Hcanter/'+deletid+'.json')
//  .subscribe(()=>{
//    this.fetchrate3();
//  });
//  }
//    }
 
   updaterate3(updateid, index) {
     this.editMode3=true;
     console.log(updateid);
     this.editrateid3 =updateid;
     console.log(this.data3[index]);
     // console.log(this.data[index].rate1);
   
     // Check if rateform is defined and has a form property
     
       this.rateform3.setValue({
         
       rate1:this.data3[index].rate1,
      rate2:this.data3[index].rate2,
     rate3: this.data3[index].rate3,
     rate4:this.data3[index].rate4,
     rate5:this.data3[index].rate5,
     rate6:this.data3[index].rate6,
     rate7: this.data3[index].rate7,
     rate8:this.data3[index].rate8,
      rate9:this.data3[index].rate9,
     rate10:this.data3[index].rate10,
     rate11: this.data3[index].rate11,
     rate12:this.data3[index].rate12,
     rate13: this.data3[index].rate13,
     rate14:this.data3[index].rate14,
     rate15: this.data3[index].rate15,
     rate16:this.data3[index].rate16,
     rate17: this.data3[index].rate17,
     rate18:this.data3[index].rate18,
     rate19:this.data3[index].rate19,
     rate20:this.data3[index].rate20,
     
     rate21:this.data3[index].rate21,
     rate22:this.data3[index].rate22,
     rate23: this.data3[index].rate23,
     rate24: this.data3[index].rate24,
     rate25:this.data3[index].rate25,
     rate26:this.data3[index].rate26,
     rate27:this.data3[index].rate27,
     rate28:this.data3[index].rate28,
     rate29: this.data3[index].rate29,
     rate30:this.data3[index].rate30,
     rate31: this.data3[index].rate31,
     rate32:this.data3[index].rate32,
     rate33: this.data3[index].rate33,
     rate34:this.data3[index].rate34,
     rate35: this.data3[index].rate35,
     rate36:this.data3[index].rate36,
     rate37: this.data3[index].rate37,
     rate38:this.data3[index].rate38,
     rate39:this.data3[index].rate39,
     rate40:this.data3[index].rate40,
     rate41:this.data3[index].rate41,
     rate42:this.data3[index].rate42,
     rate43: this.data3[index].rate43,
     rate44:this.data3[index].rate44,
     rate45: this.data3[index].rate45,
     rate46:this.data3[index].rate46,
     rate47:this.data3[index].rate47,
     rate48:this.data3[index].rate48,
     rate49: this.data3[index].rate49,
     rate50:this.data3[index].rate50,
     rate51:this.data3[index].rate51,
     rate52:this.data3[index].rate52,
     rate53:this.data3[index].rate53,
     rate54:this.data3[index].rate54,
     rate55:this.data3[index].rate55,
     rate56:this.data3[index].rate56,
     rate57:this.data3[index].rate57,
     rate58:this.data3[index].rate58,
     rate59:this.data3[index].rate59,
     rate60:this.data3[index].rate60,
     })
   } 
 
   resetForm3() {
     // Reset the form to its initial state
     this.rateform3.resetForm();
     this.editMode3 = false;
     this.editrateid3 = null;
   }
 
 
    editMode4:boolean=false;
   editrateid4;
  
    @ViewChild('RateForm4') rateform4:NgForm;
    data4!: any[];
  
  
  
  
    private url4='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/H20f.json'
    
    
    addRate4(rate:Rate){
      if(this.rateform4.valid){
        if(this.editMode4){
            // console.log('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/H20f/'+this.editrateid+'.json');
            this.http.put<Rate>('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/H20f/'+this.editrateid4+'.json',rate).subscribe((res)=>{
              // console.log(res);
              this.fetchrate4();
              this.resetForm4();
              this.snackBar.open('Update successful', 'Close', { duration: 3000 });
            })
        }
        else{
      //     console.log(rate);
      // this.http.post<Rate>(this.url4,rate).subscribe((res)=>{
      //   console.log(res);
      //   this.fetchrate4();
      //   this.resetForm4();
      //   this.snackBar.open('Add successful', 'Close', { duration: 3000 });
      // })
  
        }
      
  
    }
    else{
      alert("error please enter number only")
    }
  
    }
  
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
  
  
    
  //   deletrate4(deletid){
  // if(confirm('do you want to delet')){
  //   console.log(deletid)
  // this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/H20f/'+deletid+'.json')
  // .subscribe(()=>{
  //   this.fetchrate4();
  // });
  // }
  //   }
  
 
    updaterate4(updateid, index) {
      this.editMode4=true;
      console.log(updateid);
      this.editrateid4 =updateid;
      console.log(this.data4[index]);
      // console.log(this.data[index].rate1);
    
      // Check if rateform is defined and has a form property
      
        this.rateform4.setValue({
          
        rate1:this.data4[index].rate1,
       rate2:this.data4[index].rate2,
      rate3: this.data4[index].rate3,
      rate4:this.data4[index].rate4,
      rate5:this.data4[index].rate5,
      rate6:this.data4[index].rate6,
      rate7: this.data4[index].rate7,
      rate8:this.data4[index].rate8,
       rate9:this.data4[index].rate9,
      rate10:this.data4[index].rate10,
      rate11: this.data4[index].rate11,
      rate12:this.data4[index].rate12,
      rate13: this.data4[index].rate13,
      rate14:this.data4[index].rate14,
      rate15: this.data4[index].rate15,
      rate16:this.data4[index].rate16,
      rate17: this.data4[index].rate17,
      rate18:this.data4[index].rate18,
      rate19:this.data4[index].rate19,
      rate20:this.data4[index].rate20,
      
      rate21:this.data4[index].rate21,
      rate22:this.data4[index].rate22,
      rate23: this.data4[index].rate23,
      rate24: this.data4[index].rate24,
      rate25:this.data4[index].rate25,
      rate26:this.data4[index].rate26,
      rate27:this.data4[index].rate27,
      rate28:this.data4[index].rate28,
      rate29: this.data4[index].rate29,
      rate30:this.data4[index].rate30,
      rate31: this.data4[index].rate31,
      rate32:this.data4[index].rate32,
      rate33: this.data4[index].rate33,
      rate34:this.data4[index].rate34,
      rate35: this.data4[index].rate35,
      rate36:this.data4[index].rate36,
      rate37: this.data4[index].rate37,
      rate38:this.data4[index].rate38,
      rate39:this.data4[index].rate39,
      rate40:this.data4[index].rate40,
      rate41:this.data4[index].rate41,
      rate42:this.data4[index].rate42,
      rate43: this.data4[index].rate43,
      rate44:this.data4[index].rate44,
      rate45: this.data4[index].rate45,
      rate46:this.data4[index].rate46,
      rate47:this.data4[index].rate47,
      rate48:this.data4[index].rate48,
      rate49: this.data4[index].rate49,
      rate50:this.data4[index].rate50,
      rate51:this.data4[index].rate51,
      rate52:this.data4[index].rate52,
      rate53:this.data4[index].rate53,
      rate54:this.data4[index].rate54,
      rate55:this.data4[index].rate55,
      rate56:this.data4[index].rate56,
      rate57:this.data4[index].rate57,
      rate58:this.data4[index].rate58,
      rate59:this.data4[index].rate59,
      rate60:this.data4[index].rate60,
      })
    } 
  
    resetForm4() {
      // Reset the form to its initial state
      this.rateform4.resetForm();
      this.editMode4 = false;
      this.editrateid4 = null;
    }
  
 
 
    editMode5:boolean=false;
    editrateid5;
   
     @ViewChild('RateForm5') rateform5:NgForm;
     data5!: any[];
   
   
   
   
     private url5='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/singlexl.json'
     
     
     addRate5(rate:Rate){
       if(this.rateform5.valid){
         if(this.editMode5){
             // console.log('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/singlexl/'+this.editrateid+'.json');
             this.http.put<Rate>('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/singlexl/'+this.editrateid5+'.json',rate).subscribe((res)=>{
               // console.log(res);
               this.fetchrate5();
               this.resetForm5();
               this.snackBar.open('Update successful', 'Close', { duration: 3000 });
             })
         }
         else{
      //      console.log(rate);
      //  this.http.post<Rate>(this.url5,rate).subscribe((res)=>{
      //    console.log(res);
      //    this.fetchrate5();
      //    this.resetForm5();
      //    this.snackBar.open('Add successful', 'Close', { duration: 3000 });
      //  })
   
         }
       
   
     }
     else{
       alert("error please enter number only")
     }
   
     }
   
     fetchrate5(){
       this.http.get<Rate>(this.url5).pipe(map(resData=>{
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
         this.data5 = res
       })
     }
   
   
     
   //   deletrate5(deletid){
   // if(confirm('do you want to delet')){
   //   console.log(deletid)
   // this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/singlexl/'+deletid+'.json')
   // .subscribe(()=>{
   //   this.fetchrate5();
   // });
   // }
   //   }
   
  
     updaterate5(updateid, index) {
       this.editMode5=true;
       console.log(updateid);
       this.editrateid5 =updateid;
       console.log(this.data5[index]);
       // console.log(this.data[index].rate1);
     
       // Check if rateform is defined and has a form property
       
         this.rateform5.setValue({
           
         rate1:this.data5[index].rate1,
        rate2:this.data5[index].rate2,
       rate3: this.data5[index].rate3,
       rate4:this.data5[index].rate4,
       rate5:this.data5[index].rate5,
       rate6:this.data5[index].rate6,
       rate7: this.data5[index].rate7,
       rate8:this.data5[index].rate8,
        rate9:this.data5[index].rate9,
       rate10:this.data5[index].rate10,
       rate11: this.data5[index].rate11,
       rate12:this.data5[index].rate12,
       rate13: this.data5[index].rate13,
       rate14:this.data5[index].rate14,
       rate15: this.data5[index].rate15,
       rate16:this.data5[index].rate16,
       rate17: this.data5[index].rate17,
       rate18:this.data5[index].rate18,
       rate19:this.data5[index].rate19,
       rate20:this.data5[index].rate20,
       
       rate21:this.data5[index].rate21,
       rate22:this.data5[index].rate22,
       rate23: this.data5[index].rate23,
       rate24: this.data5[index].rate24,
       rate25:this.data5[index].rate25,
       rate26:this.data5[index].rate26,
       rate27:this.data5[index].rate27,
       rate28:this.data5[index].rate28,
       rate29: this.data5[index].rate29,
       rate30:this.data5[index].rate30,
       rate31: this.data5[index].rate31,
       rate32:this.data5[index].rate32,
       rate33: this.data5[index].rate33,
       rate34:this.data5[index].rate34,
       rate35: this.data5[index].rate35,
       rate36:this.data5[index].rate36,
       rate37: this.data5[index].rate37,
       rate38:this.data5[index].rate38,
       rate39:this.data5[index].rate39,
       rate40:this.data5[index].rate40,
       rate41:this.data5[index].rate41,
       rate42:this.data5[index].rate42,
       rate43: this.data5[index].rate43,
       rate44:this.data5[index].rate44,
       rate45: this.data5[index].rate45,
       rate46:this.data5[index].rate46,
       rate47:this.data5[index].rate47,
       rate48:this.data5[index].rate48,
       rate49: this.data5[index].rate49,
       rate50:this.data5[index].rate50,
       rate51:this.data5[index].rate51,
       rate52:this.data5[index].rate52,
       rate53:this.data5[index].rate53,
       rate54:this.data5[index].rate54,
       rate55:this.data5[index].rate55,
       rate56:this.data5[index].rate56,
       rate57:this.data5[index].rate57,
       rate58:this.data5[index].rate58,
       rate59:this.data5[index].rate59,
       rate60:this.data5[index].rate60,
       })
     } 
   
     resetForm5() {
       // Reset the form to its initial state
       this.rateform5.resetForm();
       this.editMode5 = false;
       this.editrateid5= null;
     }
   
 


     editMode6:boolean=false;
    editrateid6;
   
     @ViewChild('RateForm6') rateform6:NgForm;
     data6!: any[];
   
   
   
   
     private url6='https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/multiplexl.json'
     
     
     addRate6(rate:Rate){
       if(this.rateform6.valid){
         if(this.editMode6){
             // console.log('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/multiplexl/'+this.editrateid+'.json');
             this.http.put<Rate>('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/multiplexl/'+this.editrateid6+'.json',rate).subscribe((res)=>{
               // console.log(res);
               this.fetchrate6();
               this.resetForm6();
               this.snackBar.open('Update successful', 'Close', { duration: 3000 });
             })
         }
         else{
      //      console.log(rate);
      //  this.http.post<Rate>(this.url6,rate).subscribe((res)=>{
      //    console.log(res);
      //    this.fetchrate6();
      //    this.resetForm6();
      //    this.snackBar.open('Add successful', 'Close', { duration: 3000 });
      //  })
   
         }
       
   
     }
     else{
       alert("error please enter number only")
     }
   
     }
   
     fetchrate6(){
       this.http.get<Rate>(this.url6).pipe(map(resData=>{
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
         this.data6 = res
       })
     }
   
   
     
   //   deletrate6(deletid){
   // if(confirm('do you want to delet')){
   //   console.log(deletid)
   // this.http.delete('https://daakgadiweb-ccebf-default-rtdb.asia-southeast1.firebasedatabase.app/multiplexl/'+deletid+'.json')
   // .subscribe(()=>{
   //   this.fetchrate6();
   // });
   // }
   //   }
   
  
     updaterate6(updateid, index) {
       this.editMode6=true;
       console.log(updateid);
       this.editrateid6 =updateid;
       console.log(this.data6[index]);
       // console.log(this.data[index].rate1);
     
       // Check if rateform is defined and has a form property
       
         this.rateform6.setValue({
           
         rate1:this.data6[index].rate1,
        rate2:this.data6[index].rate2,
       rate3: this.data6[index].rate3,
       rate4:this.data6[index].rate4,
       rate5:this.data6[index].rate5,
       rate6:this.data6[index].rate6,
       rate7: this.data6[index].rate7,
       rate8:this.data6[index].rate8,
        rate9:this.data6[index].rate9,
       rate10:this.data6[index].rate10,
       rate11: this.data6[index].rate11,
       rate12:this.data6[index].rate12,
       rate13: this.data6[index].rate13,
       rate14:this.data6[index].rate14,
       rate15: this.data6[index].rate15,
       rate16:this.data6[index].rate16,
       rate17: this.data6[index].rate17,
       rate18:this.data6[index].rate18,
       rate19:this.data6[index].rate19,
       rate20:this.data6[index].rate20,
       
       rate21:this.data6[index].rate21,
       rate22:this.data6[index].rate22,
       rate23: this.data6[index].rate23,
       rate24: this.data6[index].rate24,
       rate25:this.data6[index].rate25,
       rate26:this.data6[index].rate26,
       rate27:this.data6[index].rate27,
       rate28:this.data6[index].rate28,
       rate29: this.data6[index].rate29,
       rate30:this.data6[index].rate30,
       rate31: this.data6[index].rate31,
       rate32:this.data6[index].rate32,
       rate33: this.data6[index].rate33,
       rate34:this.data6[index].rate34,
       rate35: this.data6[index].rate35,
       rate36:this.data6[index].rate36,
       rate37: this.data6[index].rate37,
       rate38:this.data6[index].rate38,
       rate39:this.data6[index].rate39,
       rate40:this.data6[index].rate40,
       rate41:this.data6[index].rate41,
       rate42:this.data6[index].rate42,
       rate43: this.data6[index].rate43,
       rate44:this.data6[index].rate44,
       rate45: this.data6[index].rate45,
       rate46:this.data6[index].rate46,
       rate47:this.data6[index].rate47,
       rate48:this.data6[index].rate48,
       rate49: this.data6[index].rate49,
       rate50:this.data6[index].rate50,
       rate51:this.data6[index].rate51,
       rate52:this.data6[index].rate52,
       rate53:this.data6[index].rate53,
       rate54:this.data6[index].rate54,
       rate55:this.data6[index].rate55,
       rate56:this.data6[index].rate56,
       rate57:this.data6[index].rate57,
       rate58:this.data6[index].rate58,
       rate59:this.data6[index].rate59,
       rate60:this.data6[index].rate60,
       })
     } 
   
     resetForm6() {
       // Reset the form to its initial state
       this.rateform6.resetForm();
       this.editMode6 = false;
       this.editrateid6= null;
     }
   

  }
