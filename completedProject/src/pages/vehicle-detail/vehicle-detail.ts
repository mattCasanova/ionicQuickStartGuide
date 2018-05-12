import { Utility } from './../../utility/utility';
import { Strings } from './../../Constants/strings.constants';
import { DetailItem } from './../../models/detail-item.model';
import { Vehicle } from './../../models/vehicle.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DatePipe, DecimalPipe } from '@angular/common';

/**
 * Generated class for the VehicleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicle-detail',
  templateUrl: 'vehicle-detail.html',
})
export class VehicleDetailPage {
  public vehicle: Vehicle;
  public detailList: DetailItem[] = [];

  /**
   * 
   */
  constructor(
    navParams: NavParams) {
      this.vehicle = navParams.data;
  }

  /**
   * 
   */
  ionViewDidLoad() {
    const decimalPipe = new DecimalPipe(Strings.PIPE_LOCALE);
    const datePipe    = new DatePipe(Strings.PIPE_LOCALE);

    const created     = datePipe.transform(this.vehicle.created);
    const edited      = datePipe.transform(this.vehicle.edited);

    const length      = Utility.getDisplayValue(this.vehicle.length, decimalPipe);
    const cost        = Utility.getDisplayValue(this.vehicle.cost_in_credits, decimalPipe);
    const cargoCap    = Utility.getDisplayValue(this.vehicle.cargo_capacity, decimalPipe);
    const maxAtmo     = Utility.getDisplayValue(this.vehicle.max_atmosphering_speed, decimalPipe);

    
    this.detailList.push(new DetailItem(Strings.MODEL_LABEL,                  this.vehicle.model));
    this.detailList.push(new DetailItem(Strings.VEHICLE_CLASS_LABEL,          this.vehicle.vehicle_class));
    this.detailList.push(new DetailItem(Strings.MANUFACTURER_LABEL,           this.vehicle.manufacturer));
    this.detailList.push(new DetailItem(Strings.LENGTH_LABEL,                 length));
    this.detailList.push(new DetailItem(Strings.COST_IN_CREDITS_LABEL,        cost));
    this.detailList.push(new DetailItem(Strings.CREW_LABEL,                   this.vehicle.crew));
    this.detailList.push(new DetailItem(Strings.PASSENGERS_LABEL,             this.vehicle.passengers));
    this.detailList.push(new DetailItem(Strings.MAX_ATMOSPHERING_SPEED_LABEL, maxAtmo));
    this.detailList.push(new DetailItem(Strings.CARGO_CAPACITY_LABEL,         cargoCap));
    this.detailList.push(new DetailItem(Strings.TIME_BETWEEN_RESUPPLY_LABEL,  this.vehicle.consumables));
    this.detailList.push(new DetailItem(Strings.CREATED_LABEL,                created));
    this.detailList.push(new DetailItem(Strings.EDITED_LABEL,                 edited));
  }

}
