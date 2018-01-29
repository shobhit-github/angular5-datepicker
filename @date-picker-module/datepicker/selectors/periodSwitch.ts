import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'period-switch',
  styles: [`
    .period-switch {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      background: slategray;
      text-transform: uppercase;
      color: white;
      font-family: sans-serif;
      font-size: smaller;
    }

    .period-switch__change {
      padding: .5em;
      cursor: pointer;
      flex-grow: 0;
      flex-shrink: 0
    }

    .period-switch__period {
      font-weight: 700;
      cursor: pointer;
      text-align: center;
      flex-grow: 1;
      flex-shrink: 1
    }

    .datepicker__buttonIcon {
      display: inline-block;
      padding: .5em;
      background-size: contain
    }

    .datepicker__buttonIcon-arrow-left {
      margin-left: 15px;
      background-image: url('../../assets/images/right-arr.png');
      transform: rotate(180deg);
    }

    .datepicker__buttonIcon-arrow-right {
      margin-right: 15px;
      background-image: url('../../assets/images/right-arr.png')
    }`
  ],
  template: `
    <div class="period-switch">
              <span class="period-switch__change datepicker__buttonIcon datepicker__buttonIcon-arrow-left"
                    (click)="prev.emit($event)">
              </span>
      <span class="period-switch__period"
            (click)="modeChange.emit($event)">
                  {{ period }}
              </span>
      <span class="period-switch__change datepicker__buttonIcon datepicker__buttonIcon-arrow-right"
            (click)="next.emit($event)">
              </span>
    </div>
  `
})
export class PeriodSwitch {
  @Input()
  public period: string;
  @Output()
  public prev: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public next: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public modeChange: EventEmitter<any> = new EventEmitter<any>();
}
