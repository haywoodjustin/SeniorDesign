import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { SongRequest } from './song-request';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEnd';

  songs: SongRequest[] = [
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 2, songName: "1 Last Cigarette", songArtist: "Band Camino"},
    {queueOrder: 3, songName: "Cough Syrup", songArtist: "Young The Giant"}, 
    {queueOrder: 1, songName: "word word word word word word word", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "SUUUUUUUUUPPPPPPERRRR LONGGGGGG NAME"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 1, songName: "Roses", songArtist: "Band Camino"},
    {queueOrder: 100, songName: "Last", songArtist: "Last Song"},
  ]

  drop(event: CdkDragDrop<SongRequest[]>) {
    moveItemInArray(this.songs, event.previousIndex, event.currentIndex);
  }
}
