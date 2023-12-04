import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-termsconditionmodal',
  templateUrl: './termsconditionmodal.component.html',
  styleUrls: ['./termsconditionmodal.component.css']
})
export class TermsconditionmodalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  closeModal() {
    this.activeModal.close();
  }

}
