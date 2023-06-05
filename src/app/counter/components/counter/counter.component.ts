import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button class="btn btn-primary" (click)="increment(1)">+1</button>
    <button class="btn btn-primary mx-2" (click)="resetCounter()">Reset</button>
    <button class="btn btn-danger" (click)="increment(-1)">-1</button>
  `,
})

export class CounterComponent {
  constructor() {}
  public counter: number = 10;

  increment(value:number):void {
    this.counter += value;
  }

  resetCounter():void {
    this.counter = 10;
  }

}
