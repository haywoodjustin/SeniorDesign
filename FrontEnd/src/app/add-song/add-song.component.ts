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

  private searchText: string = '';  

  public songs: SongRequest[] = []; 

  public selectedSong: SongRequest | undefined; 

  constructor(private qs: QueueService, private ss: SearchService, private message: MessageService) { }

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
    // ss.getSongs returns observable 
    // subscribe reads observable data and assigns it to local array to display
    //TODO: Implement error catching and handling 
    this.ss.getSongs(searchText).subscribe(songs => {
      this.songs = songs; 
    })
  }
 
  //TODO Reset form control and unselect clicked row on table 

  selectSong(song: SongRequest){
    this.qs.addSong(song);  
  }
}
