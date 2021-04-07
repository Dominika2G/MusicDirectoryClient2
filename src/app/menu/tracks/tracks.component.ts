import { Component, OnInit } from '@angular/core';
import { Track } from '../../models/track.model';
import { MusicService } from '../../shared/music.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html'
})
export class TracksComponent implements OnInit {

  constructor(private service: MusicService) { }


  listOfTracks: Track[] = [];
  currentId;
  isVisible = false;

  ngOnInit(): void {
    this.currentId = this.service.currentAlbumId.id;
    this.getTracks(this.currentId);
  }

  getTracks(id) {
    this.service.getTracks(id).subscribe(
      res => {
        this.listOfTracks = res;
      },
      err => {}
    )
  }
  
  onChange() {
     this.isVisible = !this.isVisible;
  }
}
