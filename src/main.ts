import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import { MovieListItemComponent} from "./app/movie-list-item/movie-list-item.component";
import {MovieListComponent} from "./app/movie-list/movie-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id', component: MovieListItemComponent },
  {path:'modify-movie', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));

