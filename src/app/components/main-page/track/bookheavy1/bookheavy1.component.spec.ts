import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookheavy1Component } from './bookheavy1.component';

describe('Bookheavy1Component', () => {
  let component: Bookheavy1Component;
  let fixture: ComponentFixture<Bookheavy1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bookheavy1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bookheavy1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
