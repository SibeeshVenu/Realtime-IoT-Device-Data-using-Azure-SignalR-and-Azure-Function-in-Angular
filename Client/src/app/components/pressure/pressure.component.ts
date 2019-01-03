import { Component, OnInit, Input } from '@angular/core';
import { StreamData } from 'src/app/models/stream.data';
import { SignalRService } from 'src/app/services/signal-r.service';
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
    console.log(this.pressure);
  }
}
