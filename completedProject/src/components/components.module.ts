import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { DetailListComponent } from './detail-list/detail-list';
@NgModule({
	declarations: [DetailListComponent],
	imports: [IonicPageModule],
	exports: [DetailListComponent]
})
export class ComponentsModule {}
