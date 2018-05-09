import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarshipDetailPage } from './starship-detail';

@NgModule({
  declarations: [
    StarshipDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StarshipDetailPage),
  ],
})
export class StarshipDetailPageModule {}
