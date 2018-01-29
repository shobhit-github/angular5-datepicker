import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { OverlayService } from './overlayService';
import { OverlayComponent } from './overlayComponent';
import { OverlayHostComponent } from './overlayHostComponent';


@NgModule({
    declarations: [
        OverlayComponent,
        OverlayHostComponent
    ],
    exports: [
        OverlayComponent,
        OverlayHostComponent
    ],
    providers: [
        OverlayService
    ],
    entryComponents: [
        OverlayComponent
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OverlayModule {}
