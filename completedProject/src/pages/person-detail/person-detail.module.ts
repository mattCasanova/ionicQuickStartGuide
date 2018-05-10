import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonDetailPage } from './person-detail';

@NgModule({
  declarations: [
    PersonDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonDetailPage),
    ComponentsModule
  ],
})
export class PersonDetailPageModule {}
