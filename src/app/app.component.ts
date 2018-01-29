import {Component} from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html"
})
export class AppComponent {

    public dateUpdated: object;
    public initDate: Date = new Date('2017-09-19');

    public constructor() {
    }

}
