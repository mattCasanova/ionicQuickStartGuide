import { Starship } from './../../models/starship.model';
import { Vehicle } from './../../models/vehicle.model';
import { Species } from './../../models/species.model';
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
  private static readonly BASE_URL = 'https://swapi.co/api/';

  private films:     Film[]     = [];
  private people:    Person[]   = [];
  private planets:   Planet[]   = [];
  private species:   Species[]  = [];
  private vehicles:  Vehicle[]  = [];
  private starships: Starship[] = [];

  constructor(private http: HttpClient) {}

  /**
   * 
   * @param onSuccess Closure to Call when api returns success
   * @param onError Closure to call when api returns error
   */
  public getFilms(onSuccess:(films: Film[]) => void, onError: (error: any) => void) {
    if(this.films.length) {
      onSuccess(this.films);
      return;
    }
    
    const url = ApiProvider.BASE_URL + 'films/';
    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        this.films = apiResult.results;
        onSuccess(this.films);
      }, 
      onError
    );
  }
  /**
   * 
   * @param onSuccess 
   * @param onError 
   */
  public getPeople(onSuccess: (people: Person[]) => void, onError: (error: any) => void) {
    if(this.people.length){
      onSuccess(this.people);
      return;
    }
    
    
    const url = ApiProvider.BASE_URL + 'people/';
    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        this.getRecursive(apiResult, onSuccess, onError, this.people);
      }, 
      onError
    );
  }
  /**
   * 
   */
  public getPlanets(onSuccess: (planets: Planet[]) => void, onError: (error: any) => void): void {
    if(this.planets.length) {
      onSuccess(this.planets);
      return;
    }
    
    const url = ApiProvider.BASE_URL + 'planets/';
    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        this.getRecursive(apiResult, onSuccess, onError, this.planets);
      }, 
      onError
    );

  } 
  /**
   * 
   */
  public getSpecies(onSuccess: (species: Species[]) => void, onError: (error: any) => void): void {
    if(this.species.length) {
      onSuccess(this.species);
      return;
    }

    const url = ApiProvider.BASE_URL + 'species/';
    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        this.getRecursive(apiResult, onSuccess, onError, this.species);
      },
      onError
    );
  }
  /**
   * 
   */
  public getVehicles(onSuccess: (species: Vehicle[]) => void, onError: (error: any) => void): void {
    if(this.vehicles.length) {
      onSuccess(this.vehicles);
      return;
    }

    const url = ApiProvider.BASE_URL + 'vehicles/';
    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        this.getRecursive(apiResult, onSuccess, onError, this.vehicles);
      },
      onError
    );
  }
  /**
   * 
   */
  public getStarships(onSuccess: (species: Starship[]) => void, onError: (error: any) => void): void {
    if(this.starships.length) {
      onSuccess(this.starships);
      return;
    }

    const url = ApiProvider.BASE_URL + 'starships/';
    this.http.get<APIResult>(url)
      .take(1)
      .subscribe((apiResult: APIResult) => {
        this.getRecursive(apiResult, onSuccess, onError, this.starships);
      },
      onError
    );
  }
  /**
   * 
   */
  private getRecursive(apiResult: APIResult, onSuccess: (results: any[]) => void, onError: (error: any) => void, results: any[]): void {
    for(const item of apiResult.results) {
      results.push(item);
    }

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
