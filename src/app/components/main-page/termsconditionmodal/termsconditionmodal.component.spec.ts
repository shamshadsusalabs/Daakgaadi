import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsconditionmodalComponent } from './termsconditionmodal.component';

describe('TermsconditionmodalComponent', () => {
  let component: TermsconditionmodalComponent;
  let fixture: ComponentFixture<TermsconditionmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsconditionmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsconditionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
