import { Component, OnInit } from '@angular/core';
import { QueueStoreService } from '../services/queue.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent {

  constructor(public queue: QueueStoreService) { }

  
}
