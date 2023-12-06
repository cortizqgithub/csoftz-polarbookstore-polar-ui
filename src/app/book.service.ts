import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './types';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>('/api/v1/books');
  }

  getBookByIsbn(isbn: string): Observable<Book> {
    return this.httpClient.get<Book>(`/api/v1/books/${isbn}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(`/api/v1/books`,
      book,
      httpOptions
    );
  }

  editBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(`/api/v1/books/${book.isbn}`,
      book,
      httpOptions
    );
  }

  deleteBook(isbn: string): Observable<any> {
    return this.httpClient.delete<any>(`/api/v1/books/${isbn}`);
  }

}
