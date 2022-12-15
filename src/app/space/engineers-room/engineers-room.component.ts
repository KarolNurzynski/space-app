import {Component, EventEmitter, Output} from '@angular/core';
import {SpaceShipType} from '../space-ship-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderFormValue} from '../order-form-value';
import {SpaceShip} from '../space-ship';
import {SpaceShipService} from '../space-ship.service';
import {map} from 'rxjs';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent {

  spaceShipTypes: ShipType[] = [
    {label: 'Fighter Jet', value: SpaceShipType.Fighter},
    {label: 'Bomber Jet', value: SpaceShipType.Bomber}
  ];
  isProducing: boolean = false;
  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  form = new FormGroup({
    shipType: new FormControl(SpaceShipType.Fighter, {
      validators: [Validators.required],
      nonNullable: true
    }),
    shipCount: new FormControl(1, {
      validators: [Validators.required, Validators.min(1), Validators.max(5)],
      nonNullable: true
    })
  });

  constructor(private spaceShipService: SpaceShipService) { }

  orderSpaceShips() {
    const formValue: OrderFormValue = this.form.getRawValue();
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue)
      .subscribe({
        complete: () => this.isProducing = false
      });
  }
}
