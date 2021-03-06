import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule, OverlayModule } from '../../@date-picker-module';

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
