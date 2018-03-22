
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './home/category/category.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import { NewsService } from './home/news.service';
import {TopnewsComponent} from './home/topnews/topnews.component'
import {HeaderComponent} from './header/header.component';
import {ListComponent} from './list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryComponent,
    TopnewsComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'category/:value', component: ListComponent },
      { path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [
    NewsService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
