import { DecimalPipe } from '@angular/common';
export class Utility {
   public static getDisplayValue(detail: string, decimalPipe: DecimalPipe): string {
     const value = Number.parseInt(detail);
     return (!isNaN(value)) ? decimalPipe.transform(detail) : detail;
   }
}