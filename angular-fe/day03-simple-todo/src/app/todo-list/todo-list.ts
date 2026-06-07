import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  tasks: string[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask);
    }
    this.newTask = '';
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  protected checkKey($event: KeyboardEvent) {
    if (!this.newTask.trim() && $event.key === " ")
      $event.preventDefault();
  }
}
