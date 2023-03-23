import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { BookCreateComponent } from '../book-create/book-create.component';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BooksService } from '../shared/http';
import { selectBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
    selector: 'br-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [NgFor, BookComponent, BookCreateComponent, AsyncPipe, NgIf],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books$ = inject(Store).select(selectBooks);
  loading$ = inject(Store).select(selectBooksLoading);



  doRateUp(book: Book): void {
    // const ratedBook = this.br.rateUp(book);
    // // const ratedBook = {
    // //   ...book,
    // //   rating: book.rating < 5 ? book.rating + 1 : 5
    // // }
    // this.updateAndSort(ratedBook);
    // // throw new Error('Aua!')
  }

  doRateDown(book: Book): void {
    // const ratedBook = this.br.rateDown(book);
    // this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book): void {
    // this.books = [...this.books, newBook]
  }
}
