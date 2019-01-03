import { Component, OnInit, Input } from '@angular/core';
import { SignalRService } from 'src/app/services/signal-r.service';
import { StreamData } from 'src/app/models/stream.data';
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
}
