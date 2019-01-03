import { Component, OnInit, Input } from '@angular/core';
import { SignalRService } from 'src/app/services/signal-r.service';
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
  constructor(private signalRService: SignalRService) { }

  ngOnInit() {
  }
}
