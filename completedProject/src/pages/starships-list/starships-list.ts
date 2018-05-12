import { Starship } from './../../models/starship.model';
import { Titles } from './../../Constants/titles.constants';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Pages } from '../../Constants/pages.constants';

/**
 * Generated class for the StarshipsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starships-list',
  templateUrl: 'starships-list.html',
})
export class StarshipsListPage {
  public pageTitle: string = Titles.STARSHIPS;
  public starships: Starship[];

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

    this.api.getStarships((starships: Starship[]) => {
     this.starships = starships.sort((first: Starship, second: Starship): number => {
      return first.name.toLocaleLowerCase().localeCompare(second.name.toLocaleLowerCase());
    });;
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
  public onTap(starship: Starship): void {
    this.navCtrl.push(Pages.STARSHIP_DETAIL, starship);
  }

}
