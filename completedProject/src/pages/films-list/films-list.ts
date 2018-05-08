import { Titles } from './../../Constants/titles.constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Film } from '../../models/film.model';
import { Pages } from '../../Constants/pages.constants';

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
  public pageTitle: string = Titles.FILMS;
  public films: Film[];

  /**
   * 
   */
  constructor(
    private navCtrl: NavController, 
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private api: ApiProvider) {
  }
  /**
   * 
   */
  ionViewDidLoad() {
    const loader = this.loadingCtrl.create();
    loader.present();
    this.api.getFilms((films: Film[]) => {
      this.films = films;
      loader.dismiss();
    },
    (error: any) => {
      loader.dismiss();
      const alert = this.alertCtrl.create({
        title: error.name,
        message: error.message
      });
      alert.present();
    });
  }

  /**
   * Takes the selected film and navigates to the file detail screen.
   * 
   * @param film The file detail to pass
   */
  public onTap(film: Film): void {
    this.navCtrl.push(Pages.FILM_DETAIL, film);
  }

}
