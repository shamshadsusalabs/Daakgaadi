import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookheavy2Component } from './bookheavy2.component';

describe('Bookheavy2Component', () => {
  let component: Bookheavy2Component;
  let fixture: ComponentFixture<Bookheavy2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bookheavy2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bookheavy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
