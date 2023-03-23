import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, concatMap, exhaustMap, map, mergeMap, of, share, shareReplay, switchMap } from 'rxjs';
import { Book, BooksService, BooksslowService } from '../shared/http';
import { HttpErrorResponse } from '@angular/common/http';

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
    switchMap(isbn => this.bs.booksIsbnSlowGet(isbn)),
    catchError((err: HttpErrorResponse) => of({
      title: 'FEHLER',
      isbn: '000',
      description: err.message
    }))
  );

  // book?: Book;
  // constructor(route: ActivatedRoute) {
  //   route.paramMap.pipe(
  //     map(paramMap => paramMap.get('isbn') || ''),
  //     map(isbn => this.bs.booksIsbnSlowGet(isbn))
  //   ).subscribe(book$ => book$.subscribe(book => this.book = book))
  // }

}
