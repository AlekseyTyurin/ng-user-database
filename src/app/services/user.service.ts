import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {User} from "../models/user.model";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";


@Injectable()
export class UserService {

    constructor(private _http: Http) {
    }

    public getUsersInfo(): Observable<User[]> {
        return this._http.get('https://jsonplaceholder.typicode.com/users')
            .map((response: Response) => <User[]>response.json())
    }

    public getUserDetails(id: number): Observable<User> {
        return this._http.get('https://jsonplaceholder.typicode.com/users/' + id)
            .map((response: Response) => response.json())
            .do(user => console.log(user))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        let message = `Error status code ${error.status} at ${error.url}`;
        return Observable.throw(message);
    }
}
