import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.html',
  styleUrl: './game.scss',
})
export class Game {
  private static readonly _ROCK = "Rock";
  private static readonly _PAPER = "Paper";
  private static readonly _SCISSORS = "Scissors";
  choices = [ Game._ROCK, Game._PAPER, Game._SCISSORS ];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  getRancomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }

  determineWinner(player: string, computer: string): string {
    if (player === computer)
    {
      return "It's a tie!"
    }

    if (
      (player === Game._ROCK && computer === Game._SCISSORS) ||
      (player === Game._PAPER && computer === Game._ROCK) ||
      (player === Game._SCISSORS && computer === Game._PAPER)
    ) {
      return 'You win!';
    }

    return 'You lose!';
  }

  play(choice: string) {
    this.playerChoice = choice;
    const rancomNumber = this.getRancomNumber(this.choices.length);
    const computerChoice = this.choices[rancomNumber];
    this.computerChoice = computerChoice;
    this.result = this.determineWinner(choice, computerChoice);
  }
}
