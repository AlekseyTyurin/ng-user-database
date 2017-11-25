import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {UserListComponent} from "./user-list/user-list.component";
import {UserDetailsComponent} from "./user-details/user-details.component";
import {UsersComponent} from "./users.component";

const usersRoutes: Routes = [{
    path: '', component: UsersComponent,
    children: [
        {
            path: '',
            component: UserListComponent
        },
        {
            path: 'user/:id',
            component: UserDetailsComponent
        }
    ]
}
];

export const usersRouting: ModuleWithProviders = RouterModule.forChild(usersRoutes);
