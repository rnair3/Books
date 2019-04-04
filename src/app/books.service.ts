import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private htpp: HttpClient) { }

  getBooks(): any{
    return this.htpp.get("https://openlibrary.org/api/books?");
  }
}
