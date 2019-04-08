import { Injectable } from '@angular/core';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [
    new Book('ABC', 'Dummy', 'https://image.dhgate.com/0x0/f2/albu/g6/M01/22/25/rBVaSFpDnAKAeB2AAABYR7tag2g240.jpg'),
    new Book('XYZ', 'Dummy', 'https://image.dhgate.com/0x0/f2/albu/g6/M01/22/25/rBVaSFpDnAKAeB2AAABYR7tag2g240.jpg')
  ];
  constructor() { }

  getBooks() {
    return this.books;
  }

  getBook(id: number) {
    return this.books[id];
  }

  deleteBook(book: Book) {
    this.books.splice(this.books.indexOf(book), 1);
  }
}
