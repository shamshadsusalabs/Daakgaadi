import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticpackerComponent } from './domesticpacker.component';

describe('DomesticpackerComponent', () => {
  let component: DomesticpackerComponent;
  let fixture: ComponentFixture<DomesticpackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticpackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticpackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
