import { Component, OnInit } from '@angular/core';
import {Book} from '../books/book';
import {MyLibraryService} from './my-library.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit {

  books: Book[] = [];
  constructor(private myLibraryService: MyLibraryService) { }

  ngOnInit() {
    this.books = this.myLibraryService.getMyBooks();
  }

}
