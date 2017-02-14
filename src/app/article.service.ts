import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Article } from './article';

// Variable url
const baseUrl = 'https://newsapi.org';
const newsApiKey = '3a4c40248f834994a88c5f4e8af02c63';

@Injectable()
export class ArticleService {

  constructor(
    private http: Http
  ) { }

  // Return promise and resolve articles
  public getArticles(): Promise<Article[]> {
    let params = new URLSearchParams();

    params.set('apiKey', newsApiKey);
    params.set('source', 'reddit-r-all');

    return this.http
      //.get(baseUrl + '/v1/articles')
      .get(`${baseUrl}/v1/articles`, {
        search: params
      })
      .toPromise()
      .then(resp => resp.json())
      .then(json => {
        console.log('json', json);
        return json;
      })
      .catch(err => {
        console.log('We got an error', err);
      });

  }

}
