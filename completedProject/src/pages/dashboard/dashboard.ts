import { DashItem } from './../../models/dash-item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    const top    = [new DashItem("Film", "film"), new DashItem("People", 'people')];
    const middle = [new DashItem("Planets", 'planet'), new DashItem("Species", 'bug')];
    const bottom = [new DashItem('Vehicals', 'car'), new DashItem('Starships','jet')];

    this.dashItems = [top, middle, bottom];

  }

  ionViewDidLoad() {
  }

  /**
   * 
   */
  public onTap(): void {
    console.log("Hello World");
  }

}
