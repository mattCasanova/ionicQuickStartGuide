import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarshipDetailPage } from './starship-detail';

@NgModule({
  declarations: [
    StarshipDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StarshipDetailPage),
    ComponentsModule
  ],
})
export class StarshipDetailPageModule {}
