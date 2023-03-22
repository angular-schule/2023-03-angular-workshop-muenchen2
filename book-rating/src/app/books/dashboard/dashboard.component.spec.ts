import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BookCreateComponent } from '../book-create/book-create.component';

import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { DashboardComponent } from './dashboard.component';

// @Component({
//   selector: 'br-book',
//   template: '😃',
//   standalone: true
// })
// export class DummyBookComponent {
//   @Input() book?: Book;
// }

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let bookCreateComponent: BookCreateComponent;


  beforeEach(async () => {

    const bookRatingMock = {
      rateUp: (book: Book) => book
    }

    await TestBed
      .configureTestingModule({
        imports: [DashboardComponent],
        providers: [{
          provide: BookRatingService,
          useValue: bookRatingMock
        }]
      })
      // .overrideComponent(DashboardComponent, {
      //   remove: { imports: [BookComponent] },
      //   add: { imports: [DummyBookComponent] }
      // })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    bookCreateComponent = fixture.debugElement.query(By.directive(BookCreateComponent)).componentInstance
    fixture.detectChanges();
  });

  it('doRateUp() should forward all calls to BookRatingService', () => {

    const bookRatingMock = TestBed.inject(BookRatingService);
    spyOn(bookRatingMock, 'rateUp').and.callThrough();

    const book = { } as Book;
    component.doRateUp(book);

    expect(bookRatingMock.rateUp).toHaveBeenCalledOnceWith(book);
  });

  it("should create a new book", () => {
    const title = "Macht's gut, und danke für den Fisch"
    const isbn = "9783453146068"
    const description = "Arthur und seine Freunde versuchen, " +
      "die Welt zu retten, aber es scheint niemanden zu interessieren, " +
      "außer den Delphinen, die abhauen und nur noch " +
      "'Macht's gut, und danke für den Fisch' sagen."

    const oldLength = component.books.length
    let controls = bookCreateComponent.bookForm.controls;

    controls.title.setValue(title)
    controls.isbn.setValue(isbn)
    controls.description.setValue(description)
    bookCreateComponent.submitForm()

    let newLength = component.books.length

    expect(newLength).toEqual(oldLength + 1)

    expect(component.books.find(book => book.title === title
      && book.isbn === isbn
      && book.description === description)).not.toBeUndefined();
  })
});
