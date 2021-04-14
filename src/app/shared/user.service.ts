import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //readonly BaseURI = 'http://localhost:12605/api';
  readonly BaseURI = 'https://musicdirectoryapi.azurewebsites.net/api';

  login(formData) {
    return this.http.post(this.BaseURI + '/Login', formData);
  }
}
