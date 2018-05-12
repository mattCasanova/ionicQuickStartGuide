import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VehicleDetailPage } from './vehicle-detail';

@NgModule({
  declarations: [
    VehicleDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(VehicleDetailPage),
    ComponentsModule
  ],
})
export class VehicleDetailPageModule {}
