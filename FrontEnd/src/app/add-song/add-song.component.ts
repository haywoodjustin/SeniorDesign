import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
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
  protected search = new FormControl();  

  private searchText: string = '';  

  public songs: SongRequest[] = []; 

  public selectedSong: SongRequest | undefined; 

  songs$: Observable<SongRequest[]> | undefined; 

  constructor(private queue: QueueStoreService, private ss: SearchService, private message: MessageService) { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
      ).subscribe(term => {
        this.searchText = term;
        this.getSongs(term); 
      }); 
  }

  getSongs(searchText: string) {
    if(!searchText) {
      this.songs = [];
      return; 
    }
    this.ss.getSongs(searchText).subscribe({
      next: (songs) => {
        this.songs = songs; 
      },
      error: (e) => console.error("This is an error: ", e),
      complete: () => console.info('Done Getting Songs') 
    });
  }

  //TODO Reset form control and unselected clicked row on table 

  selectSong(song: SongRequest){
    this.message.add({severity:'info', summary:'Song Clicked', detail: song.songName}); 
    //this.getSongs(''); 
  }
}
