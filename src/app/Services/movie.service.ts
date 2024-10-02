import { Injectable } from '@angular/core';
import {Movie} from "../Shared/Modules/movie";
import {Observable, of} from "rxjs";
import {movies} from "../Shared/movies-mockcontent";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movieList: Movie[] = movies


  constructor() {
  }

  getMovies(): Observable<Movie[]> {
    return of(movies);

  }
}
