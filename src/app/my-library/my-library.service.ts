import { Injectable } from '@angular/core';
import {Book} from '../books/book';

@Injectable({
  providedIn: 'root'
})
export class MyLibraryService {

  private myBooks: Book[] = [];

  constructor() { }

  getMyBooks() {
    return this.myBooks;
  }

  addBooks(myBooks: Book) {
    this.myBooks.push(myBooks);
  }
}
