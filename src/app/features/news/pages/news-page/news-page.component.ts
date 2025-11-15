import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsService } from '../../services/news.service';
import { NewsItem } from '../../models/news.model';
import { NewsCardComponent } from '../../components/news-card/news-card.component';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, NewsCardComponent]
})
export class NewsPageComponent implements OnInit {
  newsItems: NewsItem[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.loadNews();
  }

  loadNews() {
    this.isLoading = true;
    this.error = null;
    this.newsService.getNews().subscribe({
      next: (response) => {
        this.newsItems = response.items;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Error al cargar noticias:', err);
        this.error = 'No se pudieron cargar las noticias. Inténtalo de nuevo más tarde.';
        this.isLoading = false;
      }
    });
  }
}
