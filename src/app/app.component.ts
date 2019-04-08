import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {BooksComponent} from './books/books.component';
import {BookService} from './books/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  title = 'Books';
}
