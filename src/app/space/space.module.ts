import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';


@NgModule({
  declarations: [
    HangarComponent,
    SpaceShipComponent,
    PilotComponent
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
