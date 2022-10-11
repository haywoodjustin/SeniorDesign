import { Component, OnInit } from '@angular/core';
import { SongRequest } from './song-request';
import { QueueService } from '../services/queue.service';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  private $queue: Observable<SongRequest[]> | undefined; 

  public queue: SongRequest[] = []; 

  constructor(public qs: QueueService) {}

  ngOnInit(): void {
    //take 1 returns only 1 value then unsubscribes which is ideal for an on init for the queue 
    this.qs.getQueue().pipe(take(1)).subscribe(q => {
      this.queue = q; 
      console.log(q); 
    })

    this.qs.newSong$.subscribe(s => {
      console.log(s); 
      // this.queue.push(s); 
    })    
  }
}
