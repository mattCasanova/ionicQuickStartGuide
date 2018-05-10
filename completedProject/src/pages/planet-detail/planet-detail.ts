import { Strings } from './../../Constants/strings.constants';
import { DetailItem } from './../../models/detail-item.model';
import { Planet } from './../../models/planet.model';
import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { DatePipe, DecimalPipe } from '@angular/common';

/**
 * Generated class for the PlanetDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-planet-detail',
  templateUrl: 'planet-detail.html',
})
export class PlanetDetailPage {
  public planet: Planet;
  public detailList: DetailItem[] = [];

  constructor(
    navParams: NavParams) {
      this.planet = navParams.data;
  }
  /**
   * 
   */
  ionViewDidLoad() {

    const datePipe   = new DatePipe(Strings.PIPE_LOCALE);

    const created  = datePipe.transform(this.planet.created);
    const edited   = datePipe.transform(this.planet.edited);
    
    
    const orbital  = this.getDisplayValue(this.planet.orbital_period)
    const diameter = this.getDisplayValue(this.planet.diameter)
    const pop      = this.getDisplayValue(this.planet.population);



    this.detailList.push(new DetailItem(Strings.DIAMETER_LABEL,        diameter));
    this.detailList.push(new DetailItem(Strings.ROTATION_PERIOD_LABEL, this.planet.rotation_period));
    this.detailList.push(new DetailItem(Strings.ORBITAL_PERIOD_LABEL,  orbital));
    this.detailList.push(new DetailItem(Strings.GRAVITY_LABEL,         this.planet.gravity));
    this.detailList.push(new DetailItem(Strings.POPULATION_LABEL,      pop));
    this.detailList.push(new DetailItem(Strings.CLIMATE_LABEL,         this.planet.climate));
    this.detailList.push(new DetailItem(Strings.TERRAIN_LABEL,         this.planet.terrain));
    this.detailList.push(new DetailItem(Strings.SURFACE_WATER_LABEL,   this.planet.surface_water));
    this.detailList.push(new DetailItem(Strings.CREATED_LABEL,         created));
    this.detailList.push(new DetailItem(Strings.EDITED_LABEL,          edited));

  }
  /**
   * 
   */
  private getDisplayValue(detail: string): string {
    const decimalPipe = new DecimalPipe(Strings.PIPE_LOCALE);
    const value = Number.parseInt(detail);
    return (!isNaN(value)) ? decimalPipe.transform(detail) : detail;
  }
 
}
