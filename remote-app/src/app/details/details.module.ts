import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details-routing.module';
import { TaskComponent } from './task/task.component';



@NgModule({
  declarations: [
    DetailsComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  exports: [
    DetailsComponent,
    TaskComponent
  ]
})
export class DetailsModule {

  static components = {
    detailsComponent: DetailsComponent,
    taskComponent: TaskComponent
  };
}
