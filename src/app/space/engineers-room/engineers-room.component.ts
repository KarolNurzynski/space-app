import { Component } from '@angular/core';
import {SpaceShipType} from '../space-ship-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderFormValue} from '../order-form-value';

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

  orderSpaceShips() {
    const formValue: OrderFormValue = this.form.getRawValue();
    console.log(formValue);
  }
}
