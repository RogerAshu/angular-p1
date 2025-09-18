import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type newtaskdata } from '../tasks/tasks.model';
import { tasksservice } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css'
})
export class NewTask {
  @Input({ required: true }) userid!: string;
  @Output() close = new EventEmitter<void>()

  enteredtitle = '';
  entaredsummary = '';
  entareddate = '';
  private tasksservices = inject(tasksservice)

  oncancle() {
    this.close.emit();
  }
  onsubmit() {
    this.tasksservices.addtask({
      title: this.enteredtitle,
      summary: this.entaredsummary,
      date: this.entareddate
    },  this.userid);
    this.close.emit();
  }
}
