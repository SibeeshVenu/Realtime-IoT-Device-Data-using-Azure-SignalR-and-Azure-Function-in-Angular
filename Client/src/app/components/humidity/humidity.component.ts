import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { config } from 'src/app/config';

@Component({
  selector: 'app-humidity',
  templateUrl: './humidity.component.html',
  styleUrls: ['./humidity.component.css']
})
export class HumidityComponent implements OnInit {
  @Input() humidity: any;
  @Input() deviceId: any;
  config = config;
  constructor() { }

  ngOnInit() {
  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    if (changes.humidity && changes.humidity.currentValue === null) {
      this.humidity = changes.humidity.previousValue;
    }
  }
}
