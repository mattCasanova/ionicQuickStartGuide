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

    const top    = [new DashItem("Films", "film", 'FilmsPage'), new DashItem("People", 'people', '')];
    const middle = [new DashItem("Planets", 'planet', ''), new DashItem("Species", 'bug', '')];
    const bottom = [new DashItem('Vehicles', 'car', ''), new DashItem('Starships','jet', '')];

    this.dashItems = [top, middle, bottom];

  }

  ionViewDidLoad() {
  }

  /**
   * 
   */
  public onTap(page: string): void {
    if(page !== '') {
      this.navCtrl.push(page);
    }
  }

}
