import { Component } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.css']
})
export class SpaceShipComponent {
  spaceShip = {
    modelName: 'Cyber',
    imageUrl: '/assets/cyber-space-ship.gif',
    health: 60,
    activeShields: false,
    activeWeapons: true
  }
}