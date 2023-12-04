import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainbranch',
  templateUrl: './mainbranch.component.html',
  styleUrls: ['./mainbranch.component.css']
})
export class MainbranchComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    localStorage.removeItem('buyNowProd');
  }


}
