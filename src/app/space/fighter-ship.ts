import {SpaceShip} from './space-ship';
import {Pilot} from './pilot';

export class FighterShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Fighter', '/assets/fighter-space-ship.gif', pilot);
  }
}
