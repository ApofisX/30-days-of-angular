import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.html',
  styleUrl: './guess-the-number.scss',
})
export class GuessTheNumber {
  private static readonly _MAX_NUMBER = 100;
  private static readonly _MAX_ATTEMPTS = 10;

  private static _generateRandomNumber(): number {
    return Math.floor(Math.random() * GuessTheNumber._MAX_NUMBER) + 1;
  }

  private _secretNumber = GuessTheNumber._generateRandomNumber();
  attemptsLeft = GuessTheNumber._MAX_ATTEMPTS;
  protected guessedNumber?: number;
  feedbackMessage = '';
  protected gameOver = false;

  protected isValidGuess(guess?: number): boolean {
    return guess !== undefined && guess >= 1 && guess <= GuessTheNumber._MAX_NUMBER;
  }

  submitGuess(): void {
    if (!this.isValidGuess(this.guessedNumber)) {
      this.feedbackMessage = 'Enter a number between 1 and ${GuessTheNumber._MAX_NUMBER}.';
      return;
    }

    this.attemptsLeft--;
    this._evaluateGuess();
  }

  private _endGame(isWin: boolean): void {
    this.gameOver = true;
    this.feedbackMessage = isWin
      ? 'Congratulations! You guessed the correct number!'
      : `Game over! The correct number was ${this._secretNumber}.`;
  }

  private _evaluateGuess() {
    if (this.guessedNumber === this._secretNumber) {
      this._endGame(true);
    } else if (this.attemptsLeft === 0) {
      this._endGame(false);
    } else {
      this.feedbackMessage =
        this.guessedNumber! > this._secretNumber ? 'Too high! Try again.' : 'Too low. Try again.';
    }
  }

  resetGame(): void {
    this._secretNumber = GuessTheNumber._generateRandomNumber();
    this.attemptsLeft = GuessTheNumber._MAX_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feedbackMessage = '';
    this.gameOver = false;
  }
}
