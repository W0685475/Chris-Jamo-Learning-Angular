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
  getMovieById(movieId: number):Observable<Movie | undefined> {
    const movie = this.movieList.find(movie => movie.id === movieId);
    return of(movie);
  }
  addMovie(newMovie:Movie) : Observable<Movie[]>{
    this.movieList.push(newMovie)
    return of(this.movieList);
  }
  updateMovie(updatedMovie: Movie): Observable<Movie[]> {
    const index = this.movieList.findIndex(movie => movie.id=== updatedMovie.id);
    if (index !== -1) {
      this.movieList[index] = updatedMovie;
    }
    return of(this.movieList);

  }
  deleteMovie(movieId: number): Observable<Movie[]> {
    this.movieList = this.movieList.filter(movie => movie.id !== movieId);
    return of(this.movieList);
  }
}
