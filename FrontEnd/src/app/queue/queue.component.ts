import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SongRequest } from './song-request';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent {

  songs: SongRequest[] = [
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 2, songName: "1 Last Cigarette", songArtist: "Band Camino"},
    {queueOrder: 3, songName: "Cough Syrup", songArtist: "Young The Giant"}, 
  ]

  drop(event: CdkDragDrop<SongRequest[]>) {
    moveItemInArray(this.songs, event.previousIndex, event.currentIndex);
  }

}
