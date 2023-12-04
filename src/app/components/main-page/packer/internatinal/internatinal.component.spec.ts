import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternatinalComponent } from './internatinal.component';

describe('InternatinalComponent', () => {
  let component: InternatinalComponent;
  let fixture: ComponentFixture<InternatinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternatinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternatinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
