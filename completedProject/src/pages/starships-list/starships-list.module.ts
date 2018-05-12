import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StarshipsListPage } from './starships-list';

@NgModule({
  declarations: [
    StarshipsListPage,
  ],
  imports: [
    IonicPageModule.forChild(StarshipsListPage)
  ],
})
export class StarshipsListPageModule {}
