import {Component, OnInit} from '@angular/core';
import {SpaceShip} from '../space-ship';
import {FighterShip} from '../fighter-ship';
import {BomberShip} from '../bomber-ship';
import {Pilot} from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];

  ngOnInit(): void {
    this.spaceShips.push(new FighterShip());
    this.spaceShips.push(new BomberShip(new Pilot('Super Pilot', '/assets/pilot.jpeg')));
  }
}
