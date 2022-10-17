import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { SongRequest } from "../queue/song-request";

@Injectable({providedIn: 'root'})
export class QueueService {

    private options = {headers: {'Content-Type' : 'application/json'}}; 

    private queueUrl = "http://localhost:3000/queue"; 

    private queueSubject: BehaviorSubject<SongRequest[]> = new BehaviorSubject<SongRequest[]>([]); 

    queue$: Observable<SongRequest[]> = this.queueSubject.asObservable(); 

    constructor(private http: HttpClient) {
        this.getQueue();
    }
    
    getQueue(): void{
        //Sends whole queue through observable stream 
        this.http.get<SongRequest[]>(this.queueUrl).subscribe({
            next: songs => this.queueSubject.next(songs),
            error: err => console.log("Error Getting Queue", err),
            complete: () => console.log("Done Getting Song Queue")
        })
    }

    addSong(song: SongRequest): void {
        this.http.post<SongRequest>(this.queueUrl, song, this.options).subscribe({
            next: song => console.log("Song Added: ", song),
            error: err => console.log("Error Adding To Queue", err),
            // if error, UI will not change and datbase will not update 
            complete: () => 
            { 
                // If complete, UI will update 
                let allSongs = this.queueSubject.getValue(); 
                allSongs.push(song); 
                this.queueSubject.next(allSongs); 
                console.log("Done Adding Song")
            }
        })
    }
}