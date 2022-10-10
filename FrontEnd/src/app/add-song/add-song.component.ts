import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { SongRequest } from '../queue/song-request';
import { QueueStoreService } from '../services/queue.service';
import { SearchService } from '../services/search.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss'],
  providers: [MessageService] 
})
export class AddSongComponent implements OnInit{
  search = new FormControl(); 

  public songs: SongRequest[] = []; 

  public selectedSong: SongRequest | undefined; 

  songs$: Observable<SongRequest[]> | undefined; 

  constructor(private queue: QueueStoreService, private ss: SearchService, private message: MessageService) { }

  ngOnInit(): void {
    
  }

  getSongs(searchText: string) {
    console.log(searchText); 
    this.ss.getSongs(searchText).subscribe({
      next: (songs) => {
        if(searchText) this.songs = songs.filter(
          song => song.songName.toUpperCase().includes(
            searchText.toUpperCase()) || song.songArtist.toUpperCase().includes(searchText.toUpperCase())
            );
        else this.songs = []; 
      },
      error: (e) => console.error("This is an error", e),
      complete: () => console.info('Done Getting Songs') 
    });
  }

  selectSong(song: SongRequest){
    this.message.add({severity:'info', summary:'Song Clicked', detail: song.songName}); 
    this.getSongs(''); 
    this.search.reset; 
  }
}
