import {Component, Input} from '@angular/core';
import {Movie} from "../Shared/Modules/movie";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {NgClass, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MovieService} from "../Services/movie.service";
import {movies} from "../Shared/movies-mockcontent";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent,
    NgForOf,
    NgClass,
    NgStyle,
    NgOptimizedImage
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  // Create an array of movies using the Movie interface

  movieList : Movie[] = [];
  constructor(private movieService: MovieService) {
  }

  @Input() movie?: Movie;

  ngOnInit() : void {
    this.movieService.getMovies().subscribe({
      complete(): void {
      }, error(err: any): void {
      }, next(value: Movie[]): void {
      },
      // this.movieList = this.movieService.getMovies();
      // next:(data:Movie[]) => this.movieList = data,
      // error: err => console.error("Error Fetching Movies", err),
      // complete:() => console.log("Movie Data Fetch Complete!")
    })
  }


  protected readonly movies = movies;
}
