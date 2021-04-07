export class Album {
  albumId: number;
  author: string = '';
  title: string = '';
  version: string = '';
  releaseData: string = '';
  providerId: string = '';
  provider: string = '';
  tracks: any;

  constructor(id, author, title, version, releaseData, provider, tracks, providerId) {
    this.albumId = id;
    this.author = author;
    this.title = title;
    this.version = version;
    this.releaseData = releaseData;
    this.provider = provider;
    this.tracks = tracks;
    this.providerId;

  }
}
