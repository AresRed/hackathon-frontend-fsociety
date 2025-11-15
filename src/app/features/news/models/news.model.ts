export interface NewsResponse {
  source: string;
  count: number;
  items: NewsItem[];
}

export interface NewsItem {
  title: string;
  link: string;
  published: string;
  summary: string;
}
