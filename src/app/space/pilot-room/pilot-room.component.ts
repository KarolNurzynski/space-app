import { Component } from '@angular/core';
import {Pilot} from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent {
  pilots: Pilot[] = [];
  selectedPilot: Pilot | null = null;

  ngOnInit() {
    this.pilots.push(new Pilot('Karol', '/assets/pilot.jpeg'));
    this.pilots.push(new Pilot('Smith'));
  }

  select(pilot: Pilot | null): void {
    this.selectedPilot = pilot;
  }
}
