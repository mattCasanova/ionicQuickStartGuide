import { Strings } from './../../Constants/strings.constants';
import { DetailItem } from './../../models/detail-item.model';
import { Species } from './../../models/species.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the SpeciesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-species-detail',
  templateUrl: 'species-detail.html',
})
export class SpeciesDetailPage {
  public species: Species;
  public detailList: DetailItem[] = [];

  /**
   * 
   */
  constructor(
    navParams: NavParams) {
      this.species = navParams.data;
  }
  /**
   * 
   */
  ionViewDidLoad() {
    const datePipe   = new DatePipe(Strings.PIPE_LOCALE);

    const created  = datePipe.transform(this.species.created);
    const edited   = datePipe.transform(this.species.edited);

    this.detailList.push(new DetailItem(Strings.CLASSIFICATION_LABEL,   this.species.classification));
    this.detailList.push(new DetailItem(Strings.DESIGNATION_LABEL,      this.species.designation));
    this.detailList.push(new DetailItem(Strings.AVERAGE_HEIGHT_LABEL,   this.species.average_height));
    this.detailList.push(new DetailItem(Strings.AVERAGE_LIFESPAN_LABEL, this.species.average_lifespan));
    this.detailList.push(new DetailItem(Strings.EYE_COLORS_LABEL,       this.species.eye_colors));
    this.detailList.push(new DetailItem(Strings.HAIR_COLORS_LABEL,      this.species.hair_colors));
    this.detailList.push(new DetailItem(Strings.SKIN_COLORS_LABEL,      this.species.skin_colors));
    this.detailList.push(new DetailItem(Strings.LANGUAGE_LABEL,         this.species.language));
    this.detailList.push(new DetailItem(Strings.CREATED_LABEL,          created));
    this.detailList.push(new DetailItem(Strings.EDITED_LABEL,           edited));
  }

}
