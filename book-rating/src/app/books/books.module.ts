import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';


@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        BookComponent,
        DashboardComponent,
        BookDetailsComponent,
        StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
        EffectsModule.forFeature([BookEffects])
    ],
    exports: [
        DashboardComponent
    ]
})
export class BooksModule { }
