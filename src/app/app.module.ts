import {NativeScriptModule} from 'nativescript-angular/nativescript.module';
import {NativeScriptRouterModule} from 'nativescript-angular/router';

import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import {NativeScriptFormsModule} from 'nativescript-angular/forms';
import {NativeScriptHttpClientModule} from 'nativescript-angular/http-client';


import {AppComponent} from './app.component';
import {routes, navigatableComponents} from './app.routing';
import {LoginComponent} from './pages/login/login.component';
@NgModule({
    bootstrap: [
        AppComponent, 
        LoginComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes) 
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
