import { Pages } from './../../Constants/pages.constants';
import { Planet } from './../../models/planet.model';
import { Titles } from './../../Constants/titles.constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the PlanetsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planets-list',
  templateUrl: 'planets-list.html',
})
export class PlanetsListPage {
  public pageTitle: string = Titles.PLANETS;
  public planets: Planet[];

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

    this.api.getPlanets((planets: Planet[]) => {
     this.planets = planets;
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
  public onTap(planet: Planet): void {
    this.navCtrl.push(Pages.PLANET_DETAIL, planet);
  }

}
