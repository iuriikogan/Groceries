import { Component } from "@angular/core";
import { calcBindingFlags } from "@angular/core/src/view/util";

@Component({
    selector: "gr-main",
    template:
        `<StackLayout>
            <Image src="~logo_login" stretch="none" horizontalAlignment="center"></Image>
            <TextField hint="Email Address" keyboardType="email" autocorrect="false" autocapitalizationType="none"></TextField>
            <TextField hint="Password" secure="true"></TextField>

            <Button text="Sign in" class="submit-button" (tap)="submit()"></Button>
            <Button text="Sign up for Groceries"></Button>
        </StackLayout>
    `,
    styleUrls: ['app/pages/login/login.css','app/pages/login/login-common.css']
})
export class AppComponent { 

    public submit() {
        console.log("hello");
    }
} 