import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, OnDestroy {
  public users: string[];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.users$.subscribe((users$) => {
      this.users = users$;
    })
  }

  ngOnDestroy(): void {
    this.userService.users$.unsubscribe();
  }
}
