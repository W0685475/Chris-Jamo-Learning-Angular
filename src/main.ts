import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import { MovieListItemComponent} from "./app/movie-list-item/movie-list-item.component";
import {MovieListComponent} from "./app/movie-list/movie-list.component";

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieListItemComponent },
]

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));

