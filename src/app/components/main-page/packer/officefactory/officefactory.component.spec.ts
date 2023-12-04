import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficefactoryComponent } from './officefactory.component';

describe('OfficefactoryComponent', () => {
  let component: OfficefactoryComponent;
  let fixture: ComponentFixture<OfficefactoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficefactoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficefactoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
