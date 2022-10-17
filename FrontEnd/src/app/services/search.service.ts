import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, map, Observable } from "rxjs";
import { SongRequest, JSONSongRequest } from "../queue/song-request";


@Injectable({providedIn: 'root'})
export class SearchService {
    private songsUrl = "http://localhost:3000/songs"; 

    private songsSubject: BehaviorSubject<SongRequest[]> = new BehaviorSubject<SongRequest[]>([]); 

    songs$: Observable<SongRequest[]> = this.songsSubject.asObservable();

    constructor(private http: HttpClient) {}

    getSongs(searchText: string): void {
        if(!searchText) this.songsSubject.next([]); 
        else{
            this.http.get<JSONSongRequest[]>(this.songsUrl).pipe(map(songs => {
                return this.doFilter(searchText, songs)
                    .map( song => { 
                        return {songName: song["title"], songArtist: song["artist"]}; 
                })
            }))
            .subscribe({
                next: songs => this.songsSubject.next(songs),
                error: err => console.log("Error Getting Queue", err),
                complete: () => console.log("Done Getting Song Queue")
            })
        }
    };

    doFilter(search: string, songs: JSONSongRequest[]): JSONSongRequest[]{
        return songs.filter(s => 
            s.title.toUpperCase().includes(search.toUpperCase()) || 
            s.artist.toUpperCase().includes(search.toUpperCase()))
    }
} 