import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilmDetailPage } from './film-detail';

@NgModule({
  declarations: [
    FilmDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(FilmDetailPage),
    ComponentsModule
  ],
})
export class FilmDetailPageModule {}
