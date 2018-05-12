import { Pages } from './../../Constants/pages.constants';
import { Species } from './../../models/species.model';
import { Titles } from './../../Constants/titles.constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the SpeciesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-species-list',
  templateUrl: 'species-list.html',
})
export class SpeciesListPage {
  public pageTitle: string = Titles.SPECIES;
  public species: Species[];

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
    this.api.getSpecies((species: Species[]) => {
      this.species = species.sort((first: Species, second: Species): number => {
        return first.name.toLocaleLowerCase().localeCompare(second.name.toLocaleLowerCase());
      });
      loader.dismiss();
    },
    (error: any) => {
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
  public onTap(species: Species): void {
    this.navCtrl.push(Pages.SPECIES_DETAIL, species);
  }

}
