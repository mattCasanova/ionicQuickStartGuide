import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetDetailPage } from './planet-detail';

@NgModule({
  declarations: [
    PlanetDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanetDetailPage),
    ComponentsModule
  ],
})
export class PlanetDetailPageModule {}
