import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stopwatch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stopwatch.html',
  styleUrl: './stopwatch.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stopwatch {
  elapsedTime = signal(0);
  isRunning = false;
  intervalRef: ReturnType<typeof setInterval> | undefined;

  startStop() {
    this.isRunning ? this.stop() : this.start();
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime.set(0);
    console.log('Stopwatch reset.');
  }

  private start() {
    this.isRunning = true;

    this.intervalRef = setInterval(() => {
      this.elapsedTime.update((v) => v + 0.1);
    }, 100);

    console.log('Stopwatch started.');
  }

  private stop() {
    this.isRunning = false;
    clearInterval(this.intervalRef);
    console.log('Stopwatch stopped.');
  }
}
