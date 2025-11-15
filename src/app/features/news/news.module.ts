import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from './services/news.service';
import { NewsPageComponent } from './pages/news-page/news-page.component';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    HttpClientModule,
    NewsPageComponent // Importar el componente standalone
  ],
  providers: [
    NewsService
  ]
})
export class NewsModule { }
