import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-loop-component',
  templateUrl: './loop-component.component.html',
  styleUrls: ['./loop-component.component.css'],
})
export class LoopComponentComponent implements OnChanges{
  @Input()
  randomNumbers: number[] = [];

  numerosPrivados: number[] = [];
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['randomNumbers']) {
      console.log(changes)
      this.numerosPrivados = [...this.randomNumbers];
      console.log(this.numerosPrivados);
    }
  }


}


