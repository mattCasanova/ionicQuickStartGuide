import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
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
    const url = ApiProvider.BASE_URL + 'films';
    this.http.get<any[]>(url)
      .take(1)
      .subscribe(response => {
        onSuccess(response['results']);
      }, onError);
  }

  public getPeople(): Observable<any[]> {
    const url = ApiProvider.BASE_URL + 'people';
    return this.http.get<any[]>(url).take(1);
  }

}
