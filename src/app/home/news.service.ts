
import {forwardRef, Injectable, NgModule} from '@angular/core';
import * as NewsAPI from 'newsapi';


@Injectable()
export class NewsService {
    newsapi = new NewsAPI('92428aa2230c4db9a67000c1e02cdb21');
 }