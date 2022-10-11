import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SongRequest } from "../queue/song-request";

@Injectable({providedIn: 'root'})
export class QueueService {

    private options = {headers: {'Content-Type' : 'application/json'}}; 

    private queueUrl = "http://localhost:3000/queue"; 

    public newSong$ = new Observable<SongRequest>(); 

    constructor(private http: HttpClient) {}
    
    getQueue(): Observable<SongRequest[]>{
        return this.http.get<SongRequest[]>(`${this.queueUrl}`);
    }

    addSong(song: SongRequest): void {
        this.newSong$ = (this.http.post<SongRequest>(this.queueUrl, song, this.options)); 
        this.newSong$.subscribe(s => console.log(s)); 
    }

//Code Added before rework 
    
    // private readonly _songs = new BehaviorSubject<SongRequest[]>([]); 
    // readonly songs$ = this._songs.asObservable(); 

    // get songs(): SongRequest[] {
    //     return this._songs.getValue(); 
    // }

    // private set songs(val: SongRequest[]) {
    //     this._songs.next(val); 
    // }

    // addSong(song: SongRequest){
    //     this.songs = [
    //         ...this.songs,
    //         {
    //             songArtist: song.songArtist,
    //             songName: song.songName
    //         },
    //     ];
    // }

    // removeSong(name: string){
    //     this.songs = this.songs.filter(song => song.songName != name); 
    // }
}