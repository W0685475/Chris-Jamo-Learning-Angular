import {Component, OnInit} from '@angular/core';
import {Movie} from "../Shared/Modules/movie";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MovieService} from "../Services/movie.service";
import {movies} from "../../data/movies-mockcontent";

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    MovieListItemComponent,
    NgForOf,
    NgStyle,
  ],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit {
  // Create an array of movies using the Movie interface

  movieList : Movie[] = [];
  constructor(private movieService: MovieService) {
  }

  ngOnInit() : void {
    this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => this.movieList = data,
      error: (err: any) => console.error("Error fetching Movies", err),
      complete: () => console.log("Movie data fetch complete!")
      // this.movieList = this.movieService.getMovies();
      // next:(data:Movie[]) => this.movieList = data,
      // error: err => console.error("Error Fetching Movies", err),
      // complete:() => console.log("Movie Data Fetch Complete!")
    })
  }


  protected readonly movies = movies;
}
