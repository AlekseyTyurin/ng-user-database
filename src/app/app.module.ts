import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UserService} from "./services/user.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        UserListComponent,
        UserDetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
