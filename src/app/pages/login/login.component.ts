import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Router } from '@angular/router';

import { Page } from 'tns-core-modules/ui/page';
import { View } from 'tns-core-modules/ui/core/view';
import { Color } from 'tns-core-modules/color';

import { User } from "../../shared/user/user"
import { UserService } from '../../shared/user/user.service';
import * as SocialShare from 'nativescript-social-share';



@Component ({
    selector: "gr-main",
    providers: [UserService],
    templateUrl: './login.component.html',
    styleUrls: ['./login.android.css', './login-common.css']
})
export class LoginComponent implements OnInit {

    public user: User;
    public isLoggingIn = true;

    @ViewChild('container') container: ElementRef;

    public ngOnInit() {        
        this.page.actionBarHidden = true;
        this.page.backgroundImage = 'res://bg_login'
    }


    constructor(
         
        private router: Router,
        private userService: UserService,
        private page: Page

    ) 

    {
        this.user = new User()
        this.user.email = 'koganiurii@gmail.com'
        this.user.password = '123123123'
    }

    public submit() {
        if (!this.user.isValidEmail()) {
            alert('Enter a valid email address.')
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        } else this.signUp();
    }

    public toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        const container = <View>this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new Color('white') : new Color('#301217'),
            duration: 200
        })
    }

    private login() {
        this.userService.login(this.user)
            .subscribe(
            () => this.router.navigate(['/list']),
            (error) => alert('Unfortunately we were unable to log you in') 
            );
    }

    private signUp() {
        this.userService.register(this.user)
            .subscribe(
                () => {
                    alert('Your Account was succesfully created.')
                    this.toggleDisplay();
                },
                () => alert('Unfortunately, We were unable to create your account.')
            )
    }

   
}



