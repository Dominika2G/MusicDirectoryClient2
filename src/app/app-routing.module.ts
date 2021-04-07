import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './login/login.component';
import { AlbumDirectoryComponent } from './menu/album-directory/album-directory.component';
import { MenuComponent } from './menu/menu.component';
import { TracksComponent } from './menu/tracks/tracks.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'menu', component: MenuComponent, children: [
      { path: 'albums', component: AlbumDirectoryComponent, canActivate: [AuthGuard] },
      { path: 'tracks', component: TracksComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
