import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { SongRequest } from "../queue/song-request";

@Injectable({providedIn: 'root'})
export class QueueStoreService {
    private readonly _songs = new BehaviorSubject<SongRequest[]>([]); 
    readonly songs$ = this._songs.asObservable(); 

    get songs(): SongRequest[] {
        return this._songs.getValue(); 
    }

    private set songs(val: SongRequest[]) {
        this._songs.next(val); 
    }

    addSong(song: SongRequest){
        this.songs = [
            ...this.songs,
            {
                songArtist: song.songArtist,
                songName: song.songName
            },
        ];
    }

    removeSong(name: string){
        this.songs = this.songs.filter(song => song.songName != name); 
    }


}