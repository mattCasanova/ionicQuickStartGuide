import { Icons } from './../../Constants/icons.constants';
import { Titles } from './../../Constants/titles.constants';
import { Pages } from './../../Constants/pages.constants';
import { DashItem } from './../../models/dash-item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  public dashItems: DashItem[][];
  constructor(private navCtrl: NavController) {

    const top    = [
      new DashItem(Titles.FILMS,  Icons.FILM,   Pages.FILMS_LIST), 
      new DashItem(Titles.PEOPLE, Icons.PEOPLE, Pages.PEOPLE_LIST)
    ];

    const middle = [
      new DashItem(Titles.PLANETS, Icons.PLANET,  Pages.PLANETS_LIST), 
      new DashItem(Titles.SPECIES, Icons.SPECIES, Pages.SPECIES_LIST)
    ];

    const bottom = [
      new DashItem(Titles.VEHICLES,  Icons.VEHICLE,  Pages.VEHICLES_LIST), 
      new DashItem(Titles.STARSHIPS, Icons.STARSHIP, Pages.STARSHIPS_LIST)
    ];

    this.dashItems = [top, middle, bottom];

  }
  /**
   * 
   */
  public onTap(page: string): void {
    this.navCtrl.push(page);
  }

}
