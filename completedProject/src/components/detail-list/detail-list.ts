import { DetailItem } from './../../models/detail-item.model';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the DetailListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'detail-list',
  templateUrl: 'detail-list.html'
})
export class DetailListComponent {
  @Input() detailList: DetailItem[];

  constructor() {
  }

}
