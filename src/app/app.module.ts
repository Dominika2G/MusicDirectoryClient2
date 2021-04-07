import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { MusicService } from './shared/music.service';
import { MenuComponent } from './menu/menu.component';
import { AlbumDirectoryComponent } from './menu/album-directory/album-directory.component';
import { TracksComponent } from './menu/tracks/tracks.component';
import { AuthorFilterPipe } from './shared/author-filter.pipe';
import { TitleFilterPipe } from './shared/title-filter.pipe';
import { DataFilterPipe } from './shared/data-filter.pipe';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlbumDirectoryComponent,
    TracksComponent,
    MenuComponent,
    AuthorFilterPipe,
    TitleFilterPipe,
    DataFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [UserService, , MusicService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

