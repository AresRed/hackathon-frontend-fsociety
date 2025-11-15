import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsResponse } from '../models/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private apiUrl = 'http://localhost:5149/api/Rss';

  constructor(private http: HttpClient) { }

  getNews(): Observable<NewsResponse> {
    return this.http.get<NewsResponse>(this.apiUrl);
  }
}
