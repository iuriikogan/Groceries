import { Component } from "@angular/core";
import { User } from "./shared/user/user"
import { UserService } from './shared/user/user.service';

@Component({
    selector: "gr-main",
    providers: [UserService],
    templateUrl: "/app/pages/login/login.component.html",
    styleUrls: ['app/pages/login/login.css','app/pages/login/login-common.css']
})
export class AppComponent { 

    public user: User;
    isLoggingIn = true;

    constructor(private userService: UserService) {
        this.user = new User()
    }

    public submit() {
        if(this.isLoggingIn) {
            this.login();
        } else this.signUp();
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
    }
    private signUp () {
        this.userService.register(this.user);

    }
    private login () {
        //define this
    }
} 

