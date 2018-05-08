import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlanetsListPage } from './planets-list';

@NgModule({
  declarations: [
    PlanetsListPage,
  ],
  imports: [
    IonicPageModule.forChild(PlanetsListPage),
  ],
})
export class PlanetsListPageModule {}
