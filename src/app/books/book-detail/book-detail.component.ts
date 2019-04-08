import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../book';
import {MyLibraryService} from '../../my-library/my-library.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

  @Input() selectedBook: Book;

  private subscription: Subscription;
  private bookIndex: number;

  constructor(private myLibraryService: MyLibraryService,
              private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.bookIndex = params.id;
        this.selectedBook = this.bookService.getBook(this.bookIndex);
      }
    );
  }

  // onEdit() {
  //   this.router.navigate(['/books', this.bookIndex, 'edit']);
  // }

  onDelete() {
    this.bookService.deleteBook(this.selectedBook);
    this.router.navigate(['/recipes']);
  }

  addToLibrary() {
      this.myLibraryService.addBooks(this.selectedBook );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
