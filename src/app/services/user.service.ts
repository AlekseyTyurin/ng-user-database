import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";
import 'rxjs/add/operator/map'


@Injectable()
export class UserService {

    constructor(private _http: Http) {
    }
    public getUsersInfo(): Observable<User[]> {
        return this._http.get('https://jsonplaceholder.typicode.com/users')
            .map((response: Response) => <User[]>response.json())
    }
}
