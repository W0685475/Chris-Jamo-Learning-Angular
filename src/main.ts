import { bootstrapApplication } from '@angular/platform-browser';
import {provideRouter, Routes} from "@angular/router";
import { AppComponent } from './app/app.component';
import { MovieListItemComponent} from "./app/movie-list-item/movie-list-item.component";
import {MovieListComponent} from "./app/movie-list/movie-list.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {PreloadAllModules} from "@angular/router";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {path: '', redirectTo: '/movies', pathMatch: 'full'},
  { path: 'movies', component: MovieListComponent },
  { path: 'movies/:id',
    loadComponent:()=> import('./app/movie-list/movie-list.component').then(m => m.MovieListComponent )},
  {path:'modify-movie',
    loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**', component:PageNotFoundComponent}
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync(), MatTableModule, MatButtonModule, MatIconModule]
}).then(r => console.log('Bootstrap successful'));

