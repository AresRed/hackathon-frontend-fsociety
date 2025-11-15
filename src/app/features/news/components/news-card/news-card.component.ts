import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NewsItem } from '../../models/news.model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, DatePipe]
})
export class NewsCardComponent {
  @Input() newsItem!: NewsItem;

  openLink() {
    if (this.newsItem && this.newsItem.link) {
      window.open(this.newsItem.link, '_blank');
    }
  }
}
