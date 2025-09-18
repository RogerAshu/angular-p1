import { Component,Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-user';
import { Tasks } from "./tasks/tasks";
import { Title } from '@angular/platform-browser';
import { NewTask } from "./new-task/new-task";
import { type newtaskdata } from './tasks/tasks.model';
import { tasksservice } from './tasks.service';


@Component({
  selector: 'app-task',
  imports: [Tasks, NewTask],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {
@Input ({required:true}) userid!:string;
 @Input({required:true}) name!:string;
 isaddingtask =false;
 constructor(private taskservice:tasksservice){

 }


  get selectedusertasks(){
    return this.taskservice.getusertasks(this.userid)
  }


  onstartaddtask(){
    this.isaddingtask =true;
  }
  oncloseaddtask(){
    this.isaddingtask=false;
  }
}
