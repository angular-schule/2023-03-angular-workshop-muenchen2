import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { NgFor } from '@angular/common';
import { BookRatingService } from '../shared/book-rating.service';
import { BookCreateComponent } from '../book-create/book-create.component';

@Component({
    selector: 'br-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    standalone: true,
    imports: [NgFor, BookComponent, BookCreateComponent],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'War ne tolle Zeit',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQuery',
    description: 'Voll veraltet',
    rating: 1
  }];

  constructor(private br: BookRatingService) {
    // setTimeout(() => this.books = [], 3000)
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook = {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // }
    this.updateAndSort(ratedBook);
    // throw new Error('Aua!')
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  addBook(newBook: Book): void {
    this.books = [...this.books, newBook]
  }
}
