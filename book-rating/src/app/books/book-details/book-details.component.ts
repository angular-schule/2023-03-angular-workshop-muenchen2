import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { concatMap, exhaustMap, map, mergeMap, share, shareReplay, switchMap } from 'rxjs';
import { Book, BooksService, BooksslowService } from '../shared/http';

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
    shareReplay(1)
  );

  // book?: Book;
  // constructor(route: ActivatedRoute) {
  //   route.paramMap.pipe(
  //     map(paramMap => paramMap.get('isbn') || ''),
  //     map(isbn => this.bs.booksIsbnSlowGet(isbn))
  //   ).subscribe(book$ => book$.subscribe(book => this.book = book))
  // }

}
