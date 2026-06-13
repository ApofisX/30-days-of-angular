import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.html',
  styleUrl: './tic-tac-toe.scss',
})
export class TicTacToe {
  board: string[] = Array(9).fill("");
  currentPlayer: string = "X";
  winner: string | null = null;
  isDraw: boolean = false;

  private _isCellOccupied(index: number): boolean {
    return this.board[index] !== "";
  }

  private _isGameOver(): boolean {
    return this.winner !== null || this.isDraw;
  }

  private _isMoveInvalid(index: number) {
    return this._isCellOccupied(index) || this._isGameOver();
  }

  private _switchPlayer(): void {
    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
  }

  checkWinner(): boolean {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    return winningCombinations.some(([a, b, c]) => this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]);
  }

  private _isBoardFull(): boolean {
    return this.board.every((cell) => cell !== "");
  }

  private _updateGameState(index: number): void {
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
    } else if (this._isBoardFull()) {
      this.isDraw = true;
    } else {
      this._switchPlayer();
    }
  }

  makeMove(index: number): void {
    if (this._isMoveInvalid(index))
      return;

    this.board[index] = this.currentPlayer;
    this._updateGameState(index);
  }

  resetGame(): void {
    this.board = this.board.fill("");
    this.currentPlayer = "X";
    this.winner = null;
    this.isDraw = false;
  }
}
