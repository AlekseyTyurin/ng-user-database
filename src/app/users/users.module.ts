import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserListComponent} from "./user-list/user-list.component";
import {usersRouting} from "./users-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {UsersComponent} from "./users.component";
import {UserService} from "../services/user.service";


@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        HttpModule,
        usersRouting
    ],
    declarations: [
        UsersComponent,
        UserListComponent,
        UserDetailsComponent
    ],
    providers: [
        UserService
    ]
})
export class UsersModule {
}
