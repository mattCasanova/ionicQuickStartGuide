import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeciesListPage } from './species-list';

@NgModule({
  declarations: [
    SpeciesListPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeciesListPage),
  ],
})
export class SpeciesListPageModule {}
