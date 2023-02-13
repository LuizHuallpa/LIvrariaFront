import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './Model/Book';



@Injectable()

export class BookService
{
    private url = 'http://localhost:12126/api/livraria/';
    
    httpOptions = {
        headers: new HttpHeaders({ 'content-type': 'application/json' })

    }
    constructor(private http: HttpClient) { }

    getBook() {
        //return this.http.get<Book[]>(this.url + 'GetAllBooks');
        return this.http.get(this.url)
    }
}