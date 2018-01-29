import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {OverlayModule} from '../overlay';

import {DaySelector, DecadeSelector, HourSelector, MinuteSelector, MonthSelector, PeriodSwitch, TimeComponentScroller, TimeComponentSelector, YearSelector} from './selectors';
import {DatePicker, DatePickerPanel, DateSelectorComponent, TimeSelector} from './index';


@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
    FormsModule
  ],
  declarations: [
    PeriodSwitch,
    DaySelector,
    DecadeSelector,
    HourSelector,
    MinuteSelector,
    MonthSelector,
    TimeComponentSelector,
    TimeComponentScroller,
    YearSelector,
    DatePickerPanel,
    DateSelectorComponent,
    DatePicker,
    TimeSelector,
    TimeComponentScroller,
  ],
  exports: [
    DatePicker
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [
    DatePickerPanel
  ]
})
export class DatePickerModule {
}
