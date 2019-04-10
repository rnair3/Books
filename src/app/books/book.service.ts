import { Injectable } from '@angular/core';
import {Book} from './book';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private books: Book[] = [];
  constructor(private http: HttpClient) { }

  getBooks() {
    this.fetchData().subscribe(data => this.books = data);
    return this.books;
  }

  getBook(id: number) {
    this.fetchData().subscribe(data => this.books = data);
    return this.books[id];
  }

  deleteBook(book: Book) {
    this.books.splice(this.books.indexOf(book), 1);
  }

  storeData() {
    const body = JSON.stringify(this.books);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put('https://bookcatalog-85634.firebaseio.com/books.json', body, {headers});
  }

  fetchData(): Observable<Book[]> {
    // const a = this.http.get(encodeURI('https://bookcatalog-85634.firebaseio.com/books.json'));
    // console.log(a);
    // return a;
    return this.http.get<Book[]>(encodeURI('https://bookcatalog-85634.firebaseio.com/books.json'));
      // .pipe(map((response: Response) => response.json()))
     // .subscribe(data => this.books = data);
  }

  // getSearchedBook(search: string) {
  //   const encodedURI  = encodeURI('https://www.googleapis.com/books/v1/volumes?q=' + search + '&maxResults=12');
  //   return this.http.get(encodedURI).map((response: Response) => response.json()).subscribe(
  //     data: Book[] =>
  //   {
  //     this.books = data;
  //   };
  // }
}
