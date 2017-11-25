import {Component, OnInit} from "@angular/core";
import {User} from "../models/user.model";
import {UserService} from "../services/user.service";

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    public users: User[];
    private errorMessage: string;

    constructor(private _getUsers: UserService) {
    }

    ngOnInit() {
        this.getAllUsers();
    }

    public getAllUsers() {
        this._getUsers.getUsersInfo()
            .subscribe(
                (data) => this.users = data,
                (error) => this.errorMessage = <any>error
            )
    }

}
