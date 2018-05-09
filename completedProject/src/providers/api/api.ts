import { Person } from './../../models/person.model';
import { APIResult } from './../../models/api-result.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/take'
import { Film } from '../../models/film.model';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private static readonly BASE_URL = 'https://swapi.co/api/'

  constructor(private http: HttpClient) {
  }

  /**
   * 
   * @param onSuccess Closure to Call when api returns success
   * @param onError Closure to call when api returns error
   */
  public getFilms(onSuccess:(films: Film[]) => void, onError: (error: any) => void) {
    const url = ApiProvider.BASE_URL + 'films/';
    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        onSuccess(apiResult.results);
      }, onError);
  }

  public getPeople(onSuccess: (people: Person[]) => void, onError: (error: any) => void) {
    const url = ApiProvider.BASE_URL + 'people/';
    let results: Person[] = [];

    
    const recursiveGet = (apiResult: APIResult) => {
      results = results.concat(apiResult.results);
      if(apiResult.next) {
        this.http.get<APIResult>(apiResult.next).take(1).subscribe(recursiveGet, onError);
      } else {
        onSuccess(results);
      }
    }
    

    this.http.get<APIResult>(url)
      .take(1)
      .subscribe(recursiveGet, onError);
  }

}
