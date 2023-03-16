import { Component } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
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
}
