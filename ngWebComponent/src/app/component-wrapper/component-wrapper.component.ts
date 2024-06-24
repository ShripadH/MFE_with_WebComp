import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-component-wrapper',
  templateUrl: './component-wrapper.component.html',
  styleUrls: ['./component-wrapper.component.css']
})
export class ComponentWrapperComponent {
  @ViewChild('placeHolder', { read: ViewContainerRef })
  viewContainer!: ViewContainerRef;


  async load(): Promise<void> {

    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component',
    }).then((m) => this.viewContainer.createComponent(m.DetailsComponent));

  }
}