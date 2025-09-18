import { Component, inject, Input,   } from '@angular/core';
import { type task } from './tasks.model';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
import { tasksservice } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Card,DatePipe],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {
  @Input({required:true}) task!:task
   
  private tasksservice =inject(tasksservice)
  oncompletetask(){
    this.tasksservice.removetask(this.task.id);
  }
}
