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
        this.user.email = 'koganiurii@gmail.com'
        this.user.password = '123123123'
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
        this.userService.register(this.user)
        .subscribe(
            () => {
                    alert('Your Account was succesfully created.')
                    this.toggleDisplay();
            },
            () => alert('Unfortunately, We were unable to create your account.')
        )

    }
    private login () {
        //define this
    }
} 

