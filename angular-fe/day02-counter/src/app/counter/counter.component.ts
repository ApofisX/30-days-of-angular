import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-counter',
  imports: [NgClass, NgStyle],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  counter: number = 5;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  getCounterStatus(): string {
    if (this.counter > 0) {
      return 'positive';
    } else if (this.counter === 0) {
      return 'neutral';
    } else {
      return 'negative';
    }
  }
}
