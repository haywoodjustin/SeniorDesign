import { Component, OnInit } from '@angular/core';
import { SongRequest } from './song-request';
import { QueueService } from '../services/queue.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  queue$ = new Observable<SongRequest[]>(); 

  constructor(private qs: QueueService) {}

  ngOnInit(): void {
    // Setting observable equal to service observable 
    // This makes the local observable get updates when the service is updated 
    this.queue$ = this.qs.queue$; 
  }
}
