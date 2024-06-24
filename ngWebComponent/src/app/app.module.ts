import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
import { ModuleWrapperComponent } from './module-wrapper/module-wrapper.component';
import { ComponentWrapperComponent } from './component-wrapper/component-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    ModuleWrapperComponent,
    ComponentWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { 

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('ng-16-web-component', element);
  }
}
