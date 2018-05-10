import { DetailItem } from './../../models/detail-item.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Film } from '../../models/film.model';
import { DatePipe } from '@angular/common';
import { Strings } from '../../Constants/strings.constants';

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
  public detailList: DetailItem[] = [];

  /**
   * 
   */
  constructor(
    navParams: NavParams) {
      this.film = navParams.data;
  }

  /**
   * 
   */
  ionViewDidLoad() {
    const datePipe: DatePipe = new DatePipe(Strings.PIPE_LOCALE);
    const release = datePipe.transform(this.film.release_date);
    const created = datePipe.transform(this.film.created);
    const edited  = datePipe.transform(this.film.edited);

    this.detailList.push(new DetailItem(Strings.EPISODE_LABEL,       this.film.episode_id.toString()));
    this.detailList.push(new DetailItem(Strings.REALEASE_DATE_LABEL, release));
    this.detailList.push(new DetailItem(Strings.DIRECTOR_LABEL,      this.film.director));
    this.detailList.push(new DetailItem(Strings.PRODUCER_LABEL,      this.film.producer));
    this.detailList.push(new DetailItem(Strings.CREATED_LABEL,       created));
    this.detailList.push(new DetailItem(Strings.EDITED_LABEL,        edited));




  }

}
