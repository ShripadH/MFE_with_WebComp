import { loadRemoteModule } from '@angular-architects/module-federation';
import { Compiler, Component, Injector, Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-module-wrapper',
  templateUrl: './module-wrapper.component.html',
  styleUrls: ['./module-wrapper.component.css']
})
export class ModuleWrapperComponent {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  loaded = false;
  myComponent?: Type<any>

  constructor(
    private compiler: Compiler,
    private injector: Injector) { }

  async load(component: string) {
    await this.loadRemoteComponent(
      'http://localhost:4201/remoteEntry.js',
      './Module',
      component
    );
  }

  async loadRemoteComponent(remoteEntry: string, exposedModule: string, componentName: string) {
    await loadRemoteModule({
      type: 'module',
      remoteEntry: remoteEntry,
      exposedModule: exposedModule
    })
      .then(mod => mod.DetailsModule)
      .then(DetailsModule => {
        console.log(DetailsModule);
        this.myComponent = DetailsModule.components[componentName];
        return DetailsModule;
      })
      .then(DetailsModule => this.compiler.compileModuleAsync(DetailsModule))
      .then(factory => {
        factory.create(this.injector);
        this.loaded = true;
      });
  }
}