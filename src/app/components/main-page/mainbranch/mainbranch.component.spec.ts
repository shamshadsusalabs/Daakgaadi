import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainbranchComponent } from './mainbranch.component';

describe('MainbranchComponent', () => {
  let component: MainbranchComponent;
  let fixture: ComponentFixture<MainbranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainbranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainbranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
