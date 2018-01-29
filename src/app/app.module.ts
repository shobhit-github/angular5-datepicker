import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { OverlayModule } from '../overlay';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DatePickerModule} from '../datepicker/';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        OverlayModule,
        DatePickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
