import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../models/album.model';
import { Track } from '../models/track.model';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http: HttpClient) { }

  //readonly BaseURI = 'http://localhost:12605/api';
  readonly BaseURI = 'https://musicdirectoryapi.azurewebsites.net/api';

  currentAlbumId = {
    id: 0,
    author: '',
    title: '',
    version: '',
    releaseData: ''
  };

  getAlbums() {
    return this.http.get<Album[]>(this.BaseURI + '/AlbumRead');
  }

  getTracks(id) {
    return this.http.get<Track[]>(this.BaseURI + '/Track/'+ id);
  }
}
