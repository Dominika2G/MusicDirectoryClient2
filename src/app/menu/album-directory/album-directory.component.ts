import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from '../../models/album.model';
import { MusicService } from '../../shared/music.service';
import * as AuthorFilter from '../../shared/author-filter.pipe';


@Component({
  selector: 'app-album-directory',
  templateUrl: './album-directory.component.html'
})
export class AlbumDirectoryComponent implements OnInit {

  constructor(private service: MusicService, private router: Router) { }

  listOfAlbums: Album[] = [];
  author: any;
  year: any;
  title: any;


  ngOnInit(): void {
    this.service.getAlbums().subscribe(
      res => {
        this.listOfAlbums = res;
      },
      err => {}
    )
  }

  getTracks(album) {
    this.service.currentAlbumId.id = album.albumId;
    this.service.currentAlbumId.author = album.author;
    this.service.currentAlbumId.title = album.title;
    this.service.currentAlbumId.version = album.version;
    this.service.currentAlbumId.releaseData = album.releaseData;
  }

}
