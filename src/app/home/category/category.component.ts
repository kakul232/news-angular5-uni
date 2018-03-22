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
  @Input() type;
  

  constructor(public news: NewsService) {
   
  }

  ngOnInit() {
    this.news.newsapi.v2.topHeadlines({
      country: 'in',
      category:this.category,
      pageSize:5,
          
    }).then(response => {
     
      
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
