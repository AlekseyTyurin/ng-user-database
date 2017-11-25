import {Component, OnInit} from "@angular/core";
import {User} from "../../models/user.model";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-user-details',
    templateUrl: 'user-details.component.html',
    styleUrls: ['user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
    public user: User;
    public errorMessage;
    private subscriber: Subscription;

    constructor(private _route: ActivatedRoute,
                private _userService: UserService) {

        console.log(this._route.snapshot.params['id']);
    }

    ngOnInit() {
        this.subscriber = this._route.params.subscribe(
            (params) => {
                let id = params['id'];
                this.getUserDetails(id);
            }
        );
    }


    public getUserDetails(id) {
        return this._userService.getUserDetails(id)
            .subscribe(
                (user) => this.user = user,
                (error) => this.errorMessage = <any>error
            )
    }

}
