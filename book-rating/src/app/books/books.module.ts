import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        BookComponent,
        DashboardComponent,
        BookDetailsComponent
    ],
    exports: [
        DashboardComponent
    ]
})
export class BooksModule { }
