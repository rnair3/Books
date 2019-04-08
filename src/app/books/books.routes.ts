import {Routes} from '@angular/router';
import {BookStartComponent} from './book-start.component';
import {BookDetailComponent} from './book-detail/book-detail.component';

export const BOOKS_ROUTES: Routes = [
  {path: '', component: BookStartComponent},
  {path: ':id', component: BookDetailComponent}

];
