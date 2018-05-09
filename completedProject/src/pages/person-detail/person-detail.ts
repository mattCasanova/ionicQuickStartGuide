import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/person.model';
import { DetailItem } from '../../models/detail-item.model';

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
  constructor( navParams: NavParams) {
  }

  /**
   * 
   */
  ionViewDidLoad() {
  }

}
