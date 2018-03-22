import { NewsService } from './../home/news.service';
import {Component, OnInit,Input} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './list.component.html',
})
export class ListComponent implements OnInit {
  public Categorynews: any;
  public now :any;
  category:string;
  @Input() type;
  

  constructor(public news: NewsService,private activatedRoute: ActivatedRoute) {
   
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.category = params['value'];
      console.log(this.category);
      this.getList();
    });


    
}

getList(){
  this.news.newsapi.v2.topHeadlines({
    country: 'in',
    category:this.category,
    pageSize:20,
        
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
