import { Pages } from './../../Constants/pages.constants';
import { Vehicle } from './../../models/vehicle.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, LoadingController } from 'ionic-angular';
import { Titles } from '../../Constants/titles.constants';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the VehiclesListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicles-list',
  templateUrl: 'vehicles-list.html',
})
export class VehiclesListPage {
  public pageTitle: string = Titles.VEHICLES;
  public vehicles: Vehicle[];

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

    this.api.getVehicles((vehicles: Vehicle[]) => {
      this.vehicles = vehicles.sort((first: Vehicle, second: Vehicle): number => {
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
  public onTap(vehicle: Vehicle): void {
    this.navCtrl.push(Pages.VEHICLE_DETAIL, vehicle);
  }

}
