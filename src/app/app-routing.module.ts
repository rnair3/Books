import { NgModule } from '@angular/core';
import {Routes, RouterModule, Route} from '@angular/router';
import {BooksComponent} from './books/books.component';
import {MyLibraryComponent} from './my-library/my-library.component';
import {BOOKS_ROUTES} from './books/books.routes';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full'},
  { path: 'books', component: BooksComponent, children: BOOKS_ROUTES},
  { path: 'my-library', component: MyLibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
