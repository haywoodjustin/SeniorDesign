import { Component, OnInit } from '@angular/core';
import { SongRequest } from './song-request';
import { QueueStoreService } from '../services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  constructor(public queue: QueueStoreService) {}

  ngOnInit(): void {
  }

  addSong(song: SongRequest){
    this.queue.addSong(song);
  }

  onAddSong(){
    this.addSong({queueOrder: 0,songName: "1 Last Cigarette",songArtist: "Band Camino"}); 
  }
}
