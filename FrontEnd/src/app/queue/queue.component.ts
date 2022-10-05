import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SongRequest } from './song-request';
import { Queue } from '../queue';
import { QueueStoreService } from '../services/queue.service';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {
  constructor(public queue: QueueStoreService) {}

  ngOnInit(): void {
    //this.queue.addSong({queueOrder: 0,songName: "1 Last Cigaretter",songArtist: "Band Camino"})
    // this.addSong(1, "Roses", "Band Camino");
    // this.addSong(2, "Cough Syrup", "Young The Giant"); 
  }

  addSong(song: SongRequest){
    this.queue.addSong(song);
  }

  onAddSong(){
    this.addSong({queueOrder: 0,songName: "1 Last Cigarette",songArtist: "Band Camino"}); 
  }
}
