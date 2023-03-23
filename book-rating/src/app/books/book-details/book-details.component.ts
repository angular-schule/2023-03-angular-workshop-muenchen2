import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, map, of, retry, switchMap } from 'rxjs';

import { BooksslowService } from '../shared/http';

@Component({
  selector: 'br-book-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  showDetails = false;

  // bs = inject(BooksService);
  bs = inject(BooksslowService);

  book$ = inject(ActivatedRoute).paramMap.pipe(
    map(paramMap => paramMap.get('isbn') || ''),
    switchMap(isbn => this.bs.booksIsbnSlowGet(isbn).pipe(
      retry({
        count: 3,
        delay: 1000
      }),
      catchError((err: HttpErrorResponse) => of({
        title: 'FEHLER',
        isbn: '000',
        description: err.message
      }))))
  );

  // book?: Book;
  // constructor(route: ActivatedRoute) {
  //   route.paramMap.pipe(
  //     map(paramMap => paramMap.get('isbn') || ''),
  //     map(isbn => this.bs.booksIsbnSlowGet(isbn))
  //   ).subscribe(book$ => book$.subscribe(book => this.book = book))
  // }

}
