import { Injectable } from "@angular/core";
import { User } from './user';

@Injectable()
export class UserService {
    public register(user: User) {
        alert("about to register " + user.email);
    }
}
