import { Component, computed, EventEmitter, Input, Output , output } from '@angular/core';
import { type user } from './user.model';
import { Card } from "../shared/card/card";


@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
  @Input({required:true}) selected! :boolean;
  @Input({required:true}) user!: user;
  @Output() select = new EventEmitter();
  // select=output<string>(); 

  get imagepath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
