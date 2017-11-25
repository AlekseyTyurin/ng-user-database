import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {HttpModule} from "@angular/http";
import {UsersModule} from "./users/users.module";
import {appRouting} from "./app-routing.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        UsersModule,
        appRouting
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
