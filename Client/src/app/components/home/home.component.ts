import { Component, OnInit, NgZone } from '@angular/core';
import { SignalRService } from 'src/app/services/signal-r.service';
import { StreamData } from 'src/app/models/stream.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  streamData: StreamData = new StreamData();

  constructor(private signalRService: SignalRService) {
  }

  ngOnInit() {
    this.signalRService.init();
    this.signalRService.mxChipData.subscribe(data => {
      this.streamData = JSON.parse(data);
      console.log(data);
    });
  }

}
