import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UsersComponent} from "./users/users.component";

const appRoutes: Routes = [
    {path: '', component: UsersComponent},

];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
