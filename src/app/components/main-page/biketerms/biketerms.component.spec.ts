import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiketermsComponent } from './biketerms.component';

describe('BiketermsComponent', () => {
  let component: BiketermsComponent;
  let fixture: ComponentFixture<BiketermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiketermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiketermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
