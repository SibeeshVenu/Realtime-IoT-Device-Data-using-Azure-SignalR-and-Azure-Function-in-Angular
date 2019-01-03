import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { config } from 'src/app/config';

@Component({
  selector: 'app-pressure',
  templateUrl: './pressure.component.html',
  styleUrls: ['./pressure.component.css']
})
export class PressureComponent implements OnInit {
  @Input() pressure: any;
  @Input() deviceId: any;
  config = config;
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.pressure && changes.pressure.currentValue === null) {
      this.pressure = changes.pressure.previousValue;
    }
  }
}
