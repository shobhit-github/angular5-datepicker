// core and configs
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

// shared functionality for guard, helpers, pipes and services
import { DatePickerSizeDirective } from './_directives';


// shared functionality for ui components



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
    ],
    declarations: [
        // components

        // pipes declarations

        // directives declarations
        DatePickerSizeDirective
    ],
    providers: [

        // pipes providers
    ],
    exports: [
        DatePickerSizeDirective
    ]
})
export class SharedModule {
}
