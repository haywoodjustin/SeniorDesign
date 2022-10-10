import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, Subject } from "rxjs";
import { SongRequest, JSONSongRequest } from "../queue/song-request";


@Injectable({providedIn: 'root'})
export class SearchService {
    private songsUrl = "http://localhost:3000/songs"; 

    constructor(private http: HttpClient) {}

    getSongs(searchText: string): Observable<SongRequest[]> {
        return this.http.get<JSONSongRequest[]>(`${this.songsUrl}`).pipe( 
            map(songs => {  
                return songs.filter(s => 
                    s.title.toUpperCase().includes(searchText.toUpperCase()) || 
                    s.artist.toUpperCase().includes(searchText.toUpperCase()))
                    .map( song => { 
                        return {songName: song["title"], songArtist: song["artist"]}; 
                })
            })
        );
    };
} 