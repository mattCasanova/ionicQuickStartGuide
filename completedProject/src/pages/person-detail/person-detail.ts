import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Person } from '../../models/person.model';
import { DetailItem } from '../../models/detail-item.model';
import { Strings } from '../../Constants/strings.constants';

/**
 * Generated class for the PersonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-detail',
  templateUrl: 'person-detail.html',
})
export class PersonDetailPage {
  public person: Person;
  public detailList: DetailItem[] = [];

  /**
   * 
   */
  constructor(
    navParams: NavParams) {
      this.person = navParams.data;
  }

  /**
   * 
   */
  ionViewDidLoad() {
    const datePipe = new DatePipe(Strings.PIPE_LOCALE);

    const created = datePipe.transform(this.person.created);
    const edited  = datePipe.transform(this.person.edited);


    this.detailList.push(new DetailItem(Strings.BIRTH_YEAR_LABEL, this.person.birth_year));
    this.detailList.push(new DetailItem(Strings.EYE_COLOR_LABEL,  this.person.eye_color));
    this.detailList.push(new DetailItem(Strings.GENDER_LABEL,     this.person.gender));
    this.detailList.push(new DetailItem(Strings.HAIR_COLOR_LABEL, this.person.hair_color));
    this.detailList.push(new DetailItem(Strings.HEIGHT_LABEL,     this.person.height));
    this.detailList.push(new DetailItem(Strings.MASS_LABEL,       this.person.mass));
    this.detailList.push(new DetailItem(Strings.SKIN_COLOR_LABEL, this.person.skin_color));
    this.detailList.push(new DetailItem(Strings.CREATED_LABEL,    created));
    this.detailList.push(new DetailItem(Strings.EDITED_LABEL,     edited));

  }

}
