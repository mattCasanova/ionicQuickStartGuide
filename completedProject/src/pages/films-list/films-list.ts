import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the FilmsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films-list',
  templateUrl: 'films-list.html',
})
export class FilmsListPage {
  public films: any[];
  constructor(public navCtrl: NavController, private api: ApiProvider) {
  }

  ionViewDidLoad() {
    this.api.getFilms().subscribe((films: any[]) => {
      console.log(films)
      this.films = films['results'];
    });
  }

}
