import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';

import { DashboardComponent } from './dashboard.component';

// @Component({
//   selector: 'br-book',
//   template: ':-)',
//   standalone: true
// })
// export class DummyBookComponent {

//   @Input() book?: Book;

//   @Output() rateUp = new EventEmitter<Book>();
//   @Output() rateDown = new EventEmitter<Book>();
// }

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [DashboardComponent],
    // declarations: [BookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
    // component.doRateDown({} as Book);
    // component.doRateUp({} as Book);

  });
});
