import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-user';
import { Task } from './task/task';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, User, Task],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {  
  users = DUMMY_USERS;
  selecteduserid?:string;

  
  public get selecteduser(){
    return this.users.find((user)=>user.id === this.selecteduserid);
  }
  

  onSelectUser(id:string) {
    this.selecteduserid=id;
  }
}
