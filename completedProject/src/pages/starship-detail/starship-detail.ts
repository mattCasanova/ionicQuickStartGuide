import { Utility } from './../../utility/utility';
import { DetailItem } from './../../models/detail-item.model';
import { Starship } from './../../models/starship.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Strings } from '../../Constants/strings.constants';
import { DecimalPipe, DatePipe } from '@angular/common';

/**
 * Generated class for the StarshipDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starship-detail',
  templateUrl: 'starship-detail.html',
})
export class StarshipDetailPage {
  public starship: Starship;
  public detailList: DetailItem[] = [];


  /**
   * 
   */
  constructor(
    navParams: NavParams) {
      this.starship = navParams.data;
  }

  /**
   * 
   */
  ionViewDidLoad() {
    const decimalPipe = new DecimalPipe(Strings.PIPE_LOCALE);
    const datePipe    = new DatePipe(Strings.PIPE_LOCALE);

    const created     = datePipe.transform(this.starship.created);
    const edited      = datePipe.transform(this.starship.edited);

    const length      = Utility.getDisplayValue(this.starship.length, decimalPipe);
    const cost        = Utility.getDisplayValue(this.starship.cost_in_credits, decimalPipe);
    const crew        = Utility.getDisplayValue(this.starship.crew, decimalPipe);
    const passengers  = Utility.getDisplayValue(this.starship.passengers, decimalPipe);
    const cargoCap    = Utility.getDisplayValue(this.starship.cargo_capacity, decimalPipe);
    const maxAtmo     = Utility.getDisplayValue(this.starship.max_atmosphering_speed, decimalPipe);

    
    this.detailList.push(new DetailItem(Strings.MODEL_LABEL,                  this.starship.model));
    this.detailList.push(new DetailItem(Strings.STARSHIP_CLASS_LABEL,         this.starship.starship_class));
    this.detailList.push(new DetailItem(Strings.MANUFACTURER_LABEL,           this.starship.manufacturer));
    this.detailList.push(new DetailItem(Strings.LENGTH_LABEL,                 length));
    this.detailList.push(new DetailItem(Strings.COST_IN_CREDITS_LABEL,        cost));
    this.detailList.push(new DetailItem(Strings.CREW_LABEL,                   crew));
    this.detailList.push(new DetailItem(Strings.PASSENGERS_LABEL,             passengers));
    this.detailList.push(new DetailItem(Strings.HYPERDRIVE_RATING_LABEL,      this.starship.hyperdrive_rating));
    this.detailList.push(new DetailItem(Strings.MGTL_LABEL,                   this.starship.MGLT));
    this.detailList.push(new DetailItem(Strings.MAX_ATMOSPHERING_SPEED_LABEL, maxAtmo));
    this.detailList.push(new DetailItem(Strings.CARGO_CAPACITY_LABEL,         cargoCap));
    this.detailList.push(new DetailItem(Strings.TIME_BETWEEN_RESUPPLY_LABEL,  this.starship.consumables));
    this.detailList.push(new DetailItem(Strings.CREATED_LABEL,                created));
    this.detailList.push(new DetailItem(Strings.EDITED_LABEL,                 edited));
  }

}
