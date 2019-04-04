import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Book} from '../book';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [
    new Book('ABC', 'Dummy', 'https://image.dhgate.com/0x0/f2/albu/g6/M01/22/25/rBVaSFpDnAKAeB2AAABYR7tag2g240.jpg'),
    new Book('ABC', 'Dummy', 'https://image.dhgate.com/0x0/f2/albu/g6/M01/22/25/rBVaSFpDnAKAeB2AAABYR7tag2g240.jpg')
  ];
  @Output() bookSelected = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelected(book: Book) {
      this.bookSelected.emit(book);
  }

}
