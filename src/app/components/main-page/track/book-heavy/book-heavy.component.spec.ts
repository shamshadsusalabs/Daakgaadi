import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookHeavyComponent } from './book-heavy.component';

describe('BookHeavyComponent', () => {
  let component: BookHeavyComponent;
  let fixture: ComponentFixture<BookHeavyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookHeavyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookHeavyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
