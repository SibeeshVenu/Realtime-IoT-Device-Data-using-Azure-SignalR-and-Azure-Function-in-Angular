import { Component, OnInit, Input } from '@angular/core';
import { StreamData } from 'src/app/models/stream.data';
import { SignalRService } from 'src/app/services/signal-r.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  streamData: StreamData = new StreamData();
  constructor(private signalRService: SignalRService) { }

  ngOnInit() {
    this.signalRService.init();
    this.signalRService.mxChipData.subscribe(data => {
      this.streamData = JSON.parse(data);
    });
  }

}
