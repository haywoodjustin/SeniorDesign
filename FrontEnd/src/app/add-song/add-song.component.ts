import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SongRequest } from '../queue/song-request';
import { QueueStoreService } from '../services/queue.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent implements OnInit{
  search = new FormControl(); 

  searchSongs$: Observable<SongRequest[]> | undefined; 

  constructor(private queue: QueueStoreService, private ss: SearchService) { }

  ngOnInit(): void {
    
  }

  onSearch(searchtext: string){
    
  }

}
