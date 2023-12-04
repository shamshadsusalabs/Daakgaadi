import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookheavy3Component } from './bookheavy3.component';

describe('Bookheavy3Component', () => {
  let component: Bookheavy3Component;
  let fixture: ComponentFixture<Bookheavy3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bookheavy3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bookheavy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
