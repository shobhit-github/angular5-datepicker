import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
    host: {
        '[class.fixed]': 'positionFixed'
    },
    selector: 'overlay',
    template: '<ng-template #container></ng-template>',
    styles: [
            `
        :host {
          /*position: absolute;*/
          z-index: 100;
          right: 0;
          left: 0;
        }

        :host.fixed {
          position: fixed;
        }
        `
    ]
})
export class OverlayComponent implements OnInit {
    private completeComponentCreation: () => void;

    public positionFixed: boolean = false;
    public left: number;
    public top: number;

    @ViewChild('container', { read: ViewContainerRef })
    public container: ViewContainerRef;

    public constructor(private componentFactoryResolver: ComponentFactoryResolver,
                public elementRef: ElementRef) {}

    public addComponent<T>(componentType: Type<any>): Promise<ComponentRef<T>> {
        return new Promise(resolve => {
            this.completeComponentCreation = () => {
                const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
                const component = this.container.createComponent(factory);
                resolve(component);
            };
        });
    }

    public ngOnInit(): void {
        this.completeComponentCreation && this.completeComponentCreation();
    }
}
