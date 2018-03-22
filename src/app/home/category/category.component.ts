import { NewsService } from './../news.service';
import {Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'home-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  public Categorynews: any;
  public now :any;
  @Input() category;
  

  constructor(public news: NewsService) {
   
  }

  ngOnInit() {
    this.news.newsapi.v2.topHeadlines({
      country: 'in',
      category:this.category,
      pageSize:3,
          
    }).then(response => {
     
      console.log(response);
      this.Categorynews = response.articles;
      console.log(this.Categorynews);
      /*
        {
          status: "ok",
          sources: [...]
        }
      */
    });
}
}
