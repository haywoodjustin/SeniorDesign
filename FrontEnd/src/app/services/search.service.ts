import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SongRequest, JSONSongRequest } from "../queue/song-request";


@Injectable({providedIn: 'root'})
export class SearchService {
    constructor(private http: HttpClient) {}

    private songsUrl = "http://localhost:3000/songs"; 

    getSongs(searchText: string): Observable<SongRequest[]> {
        return this.http.get<JSONSongRequest[]>(`${this.songsUrl}`).pipe( 
            map(songs => {
                return songs.map( song => {
                    return {songName: song["title"], songArtist: song["artist"]}; 
                })
            })
        );};
} 