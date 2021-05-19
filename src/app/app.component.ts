import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    { title: 'Terminar o workshop', description: 'Aprender angular' },
    {
      title: 'Terminar de aprender ingles',
      description: 'terminar o curso de ingles',
    },
  ];

  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void {}

  drop(event: CdkDragDrop<Task[] | any>): void {
    console.log(event);

    if (event.previousContainer === event.container) return;
    if (!event.container.data || !event.previousContainer.data) return;

    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
