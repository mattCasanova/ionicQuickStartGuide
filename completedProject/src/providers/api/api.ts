import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'

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

  public getFilms(): Observable<any[]> {
    const url = ApiProvider.BASE_URL + 'films';
    return this.http.get<any[]>(url).take(1);
  }

  public getPeople(): Observable<any[]> {
    const url = ApiProvider.BASE_URL + 'people';
    return this.http.get<any[]>(url).take(1);
  }

}
