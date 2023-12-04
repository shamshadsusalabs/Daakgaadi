import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactUsService } from 'src/app/_services/contact-us.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BookComponent } from './book/book.component';
import { MatDialog } from '@angular/material/dialog';
import { BookHeavyComponent } from './book-heavy/book-heavy.component';
import { Book1Component } from './book1/book1.component';
import { Book2Component } from './book2/book2.component';
import { Bookheavy1Component } from './bookheavy1/bookheavy1.component';
import { Bookheavy2Component } from './bookheavy2/bookheavy2.component';
import { Bookheavy3Component } from './bookheavy3/bookheavy3.component';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  currUser;

  light =true;
  constructor(
    public contactUsService: ContactUsService,
    private router: Router,
    public dialog: MatDialog,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getCurrUser();
    localStorage.removeItem('buyNowProd');
  }

  changeligh(data){

    this.light=data;
  }

  getCurrUser(){
    if(localStorage.getItem('viaanMartUser')){
      this.currUser = JSON.parse(localStorage.getItem('viaanMartUser'));
    }
  }

  onSubmit(data){
    if(this.currUser){
      const todayDate = new Date();
      data.timestamp = todayDate;
      data.lastActionDate = 'No Action Taken';
      data.customerId = this.currUser._id;
      data.currentStatus = "To Be Evaluated";
      console.log(data);
      this.contactUsService.postNewMessage(data).subscribe(res=>{
        this.contactUsService.contactUsForm.reset();
        this.showNotification(
          'snackbar-success',
          'Request Sent Successfully!',
          'bottom',
          'center'
        )
      })
    }
    else if(localStorage.getItem('guest')){
      if(confirm('You need to Sign-up/Login First')){
        this.router.navigateByUrl('sign-in')
      }
    }
  }

  showNotification(colorName, text, placementFrom, placementAlign) {
    this.snackbar.open(text, '', {
      duration: 2000,
      verticalPosition: placementFrom,
      horizontalPosition: placementAlign,
      panelClass: colorName,
    });
  }


  addvehicle(type){
    localStorage.setItem('type', type);


    const dialogRef = this.dialog.open(BookComponent, {
      height: '550px',
      width: '90%'    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }


  addvehicle1(type){
    localStorage.setItem('type', type);


    const dialogRef = this.dialog.open(Book1Component, {
      height: '550px',
      width: '90%'    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }

  addvehicle2(type){
    localStorage.setItem('type', type);


    const dialogRef = this.dialog.open(Book2Component, {
      height: '550px',
      width: '90%'    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }



  addvehicleHeavy1(type){
    localStorage.setItem('type', type);


    const dialogRef = this.dialog.open(BookHeavyComponent, {
      height: '550px',
      width: '90%'    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }



  addvehicleHeavy2(type){
    localStorage.setItem('type', type);


    const dialogRef = this.dialog.open(Bookheavy1Component, {
      height: '550px',
      width: '90%'    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }


  addvehicleHeavy3(type){
    localStorage.setItem('type', type);


    const dialogRef = this.dialog.open(Bookheavy2Component, {
      height: '550px',
      width: '90%'    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }


  addvehicleHeavy4(type){
    localStorage.setItem('type', type);


    const dialogRef = this.dialog.open(Bookheavy3Component, {
      height: '550px',
      width: '90%'    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }
}
