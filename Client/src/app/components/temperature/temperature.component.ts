import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { config } from '../../config';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})

export class TemperatureComponent implements OnInit {
  @Input() temp: any;
  @Input() deviceId: any;
  gaugeValue: any;
  config = config;
  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.temp && changes.temp.currentValue === null) {
      this.temp = changes.temp.previousValue;
    }
  }
}
