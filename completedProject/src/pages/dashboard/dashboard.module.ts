import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';
import { DashItemComponent } from '../../components/dash-item/dash-item';

@NgModule({
  declarations: [
    DashboardPage,
    DashItemComponent
  ],
  imports: [
    IonicPageModule.forChild(DashboardPage),
  ],
})
export class DashboardPageModule {}
