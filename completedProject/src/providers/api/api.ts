import { Planet } from './../../models/planet.model';
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
  /**
   * 
   * @param onSuccess 
   * @param onError 
   */
  public getPeople(onSuccess: (people: Person[]) => void, onError: (error: any) => void) {
    const url = ApiProvider.BASE_URL + 'people/';
    let results: Person[] = [];

    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        this.getRecursive(apiResult, onSuccess, onError, results);
      }, 
      onError
    );
  }
  /**
   * 
   */
  public getPlanets(onSuccess: (planets: Planet[]) => void, onError: (error: any) => void): void {
    const url = ApiProvider.BASE_URL + 'planets/';
    let results: Planet[] = [];

    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        this.getRecursive(apiResult, onSuccess, onError, results);
      }, 
      onError
    );

  } 
  //public getSpecies(onSuccess: (species: Species[]) =>)

  /**
   * 
   */
  private getRecursive(apiResult: APIResult, onSuccess: (results: any[]) => void, onError: (error: any) => void, results: any[]): void {
    results = results.concat(apiResult.results);

    if(!apiResult.next) {
      onSuccess(results);
      return;
    }

    this.http.get<APIResult>(apiResult.next)
      .take(1)
      .subscribe((response: APIResult) => {
        this.getRecursive(response, onSuccess, onError, results);
      }, 
      onError
    );
  }

}
