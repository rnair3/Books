import { Component } from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {BooksComponent} from './books/books.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Books';
}
