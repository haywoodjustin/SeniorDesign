import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Observable } from 'rxjs';
import { SongRequest } from '../queue/song-request';
import { QueueService } from '../services/queue.service';
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

  songs$ = new Observable<SongRequest[]>(); 

  protected selectedSong: SongRequest | undefined; 

  constructor(private qs: QueueService, private ss: SearchService, private message: MessageService) { }

  ngOnInit(): void {
    // sets local observable equal to service observable 
    // whens service uses "next" this observable picks it up and displays it 
    this.songs$ = this.ss.songs$;
    
    //subscribe to value change of search form and fire get songs after debounce time 
    this.search.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
      ).subscribe(term => {
        this.ss.getSongs(term); 
      });  
  }
 
  //TODO Reset form control and unselect clicked row on table 

  selectSong(song: SongRequest){
    this.qs.addSong(song);  
  }
}
