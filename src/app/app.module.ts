import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { HeaderComponent } from './header/header.component';
import { BooksComponent } from './books/books.component';
import { BookItemComponent } from './books/book-list/book-item/book-item.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { MyLibraryAddComponent } from './my-library/my-library-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HeaderComponent,
    BooksComponent,
    BookItemComponent,
    BookDetailComponent,
    MyLibraryComponent,
    MyLibraryAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
