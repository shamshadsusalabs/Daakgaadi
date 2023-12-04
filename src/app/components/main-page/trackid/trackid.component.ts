import { Component, OnInit } from '@angular/core';
import { InvoiceComponent } from '../../user-dashboard/my-orders/invoice/invoice.component';
import { UserService } from 'src/app/_services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-trackid',
  templateUrl: './trackid.component.html',
  styleUrls: ['./trackid.component.css']
})
export class TrackidComponent implements OnInit {

  currUser;
  allOrders = [];
  invertedAllOrders = [];

  invoiceData;
  phoneNumber;
  order :any;
  constructor(public userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getCurrentUser();
    this.getAllOrders();
    localStorage.removeItem('buyNowProd');
  }

  getCurrentUser(){
    this.currUser = JSON.parse(localStorage.getItem('viaanMartUser'));
  }

  getAllOrders(){

    this.userService.getUserAllOrders().subscribe((res: any) =>{
      
      for(let i = res.length-1; i >= 0; i--){
        this.allOrders.push(res[i]);
      }
      
    })
  }

  generateInvoice(data){
    const dialogRef = this.dialog.open(InvoiceComponent, {
      height: '80%',
      width: '800px',
      data: data
    })
    dialogRef.afterClosed().subscribe(res=>{
      console.log(res);
    })
  }

  trackid(){
    let id =this.phoneNumber;

    this.userService.gettrack(id).subscribe((res: any) =>{
      this.order =res[0];
     console.log(res);
    })

  }
}
