import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';


@NgModule({
  declarations: [
    HangarComponent
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule
  ],
  exports: [
    HangarComponent
  ]
})
export class SpaceModule { }
