import { Component, OnInit } from '@angular/core';
import { SignalRService } from 'src/app/services/signal-r.service';
import { StreamData } from 'src/app/models/stream.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
