import { createFeature, createReducer, on } from '@ngrx/store';
import { Book } from '../shared/http';
import * as BookActions from './book.actions';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean
}

export const initialState: State = {
  books: [],
  loading: false
};

export const reducer = createReducer(
  initialState,
  on(BookActions.loadBooks, state => state),
  on(BookActions.loadBooksSuccess, (state, action) => state),
  on(BookActions.loadBooksFailure, (state, action) => state),
);

export const bookFeature = createFeature({
  name: bookFeatureKey,
  reducer,
});

