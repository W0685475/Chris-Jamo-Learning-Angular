import { Injectable } from '@angular/core';
import {Movie} from "../Shared/Modules/movie";
import {movies} from "../../data/movies-mockcontent";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'api/movies'; //URL to web api
  private movies: Movie[] = movies; //Local copy of movie data for CRUD Operations
  constructor(private http: HttpClient) {} // DI http
  // CRUD operations using HTTP Requests
  // All operations we need are:
  // Get, post, put, delete.
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
  // private movieList: Movie[] = movies


  // constructor() {
  // }
  //
  // getMovies(): Observable<Movie[]> {
  //   return of(movies);


  getMovieById(movieId: number):Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${movieId}`).pipe(catchError(this.handleError));
  }
  addMovie(newMovie: Movie) : Observable<Movie>{
    newMovie.id = this.generateNewId();
    return this.http.post<Movie>(this.apiUrl, newMovie).pipe(catchError(this.handleError));
  }
  updateMovie(updatedMovie: Movie): Observable<Movie> {
    const url = `${this.apiUrl}/${updatedMovie.id}`;
    return this.http.post<Movie>(url, updatedMovie).pipe(catchError(this.handleError));
  }
  deleteMovie(movieId: number): Observable<{}> {
    const url = `${this.apiUrl}/${movieId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  generateNewId(): number {
    return this.movies.length >0 ? Math.max(...this.movies.map(movie => movie.id)) + 1 : 1;
  }

  private handleError(error: HttpErrorResponse){
    console.error('API error', error);
    return throwError(()=> new Error ('Server error, please try again'));
  }
}
