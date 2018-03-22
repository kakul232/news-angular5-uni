import { NewsService } from './../news.service';
import {Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'home-topnews',
  templateUrl: './topnews.component.html',
})
export class TopnewsComponent implements OnInit {
  public Categorynews: any;
  public now :any;
  @Input() type;

  

  constructor(public news: NewsService) {
   
  }

  ngOnInit() {
    this.news.newsapi.v2.topHeadlines({
      country: 'in',
           
    }).then(response => {
     
      console.log(response);
      this.Categorynews = response.articles;
     
      /*
        {
          status: "ok",
          sources: [...]
        }
      */
    });
}
}
