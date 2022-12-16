import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {map} from 'rxjs';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.css']
})
export class PilotFormComponent implements OnInit {

  form = new FormGroup({
    id: new FormControl(undefined, {nonNullable: true}),
    firstName: new FormControl('', {nonNullable: true}),
    lastName: new FormControl('', {nonNullable: true}),
    imageUrl: new FormControl('', {nonNullable: true})
  });

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .pipe(map((data) => data['pilot']))
      .subscribe((pilot) => this.form.patchValue(pilot));
  }

}
