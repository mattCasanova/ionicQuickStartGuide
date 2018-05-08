import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Film } from '../../models/film.model';
import { navGroupStringtoObjects } from 'ionic-angular/navigation/url-serializer';

/**
 * Generated class for the FilmDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-film-detail',
  templateUrl: 'film-detail.html',
})
export class FilmDetailPage {
  public film: Film;


  /**
   * 
   */
  constructor(
    private navCtrl: NavController, 
    navParams: NavParams) {
      this.film = navParams.data;
  }

  /**
   * 
   */
  ionViewDidLoad() {
  }

}
