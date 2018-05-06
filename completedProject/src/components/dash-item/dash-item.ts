import { Component, Input } from '@angular/core';

/**
 * Generated class for the DashItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dash-item',
  templateUrl: 'dash-item.html'
})
export class DashItemComponent {
  @Input() icon: string;
  @Input() title: string;



  constructor() {
  }


}