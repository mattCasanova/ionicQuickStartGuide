import { Person } from './../../models/person.model';
import { Pages } from './../../Constants/pages.constants';
import { Titles } from './../../Constants/titles.constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the PeopleListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-people-list',
  templateUrl: 'people-list.html',
})
export class PeopleListPage {
  public pageTitle: string = Titles.PEOPLE;
  public people: Person[];

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
    //this.loadResource();
    const loader = this.loadingCtrl.create();
    loader.present();

    this.api.getPeople((people: Person[]) => {
      this.people = people;
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
   * 
   */
  public onTap(person: Person): void {
    this.navCtrl.push(Pages.PERSON_DETAIL, person)
  }

}
