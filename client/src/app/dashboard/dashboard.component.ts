import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // use push strategy for change detection
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {

  customObject = {
    numbers: [1, 2, 3]
  };
 
 
  numerosParaPasar: number[]= [];
 

  addNum() {
    this.customObject.numbers.push(Math.round(Math.random() * 100));
    // this.customObject.numbers = [...this.customObject.numbers, Math.round(Math.random() * 100)];
    //change the customObject reference
    // this.customObject = {
    //   numbers: [...this.customObject.numbers, Math.round(Math.random() * 100)],
    // };

    // this.numerosParaPasar.push(this.customObject.numbers[this.customObject.numbers.length - 1] );
    this.numerosParaPasar = [...this.numerosParaPasar, this.customObject.numbers[this.customObject.numbers.length - 1]];
  }
}
