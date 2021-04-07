export class Track {
  albumId: number;
  duration: string = '';
  releaseData: string = '';
  title: string = '';
  trackAuthor: string = '';
  trackId: number;
  album: any;

  constructor(albumId, duration, releaseData, title, trackAuthor, trackId, album) {
    this.albumId = albumId;
    this.duration = duration;
    this.releaseData = releaseData;
    this.title = title;
    this.trackAuthor = trackAuthor;
    this.trackId = trackId;
    this.album = album;
  }
}
