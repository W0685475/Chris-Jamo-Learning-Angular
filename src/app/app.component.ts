import {Component, OnInit} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {DatePipe, JsonPipe, NgForOf, UpperCasePipe} from "@angular/common";
import {MovieListComponent} from "./movie-list/movie-list.component";
import {MovieListItemComponent} from "./movie-list-item/movie-list-item.component";
import {MovieService} from "./Services/movie.service";
import {Movie} from "./Shared/Modules/movie";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JsonPipe, NgForOf, MovieListComponent, MovieListItemComponent, RouterLink, RouterLinkActive, UpperCasePipe, DatePipe, MatToolbar, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  myDate = Date.now();
  movie: Movie | undefined;
  myMovie: Movie | undefined;

  constructor(private movieService: MovieService ) { }

  title = 'Chris-Jamo-Learning-Angular';

  ngOnInit(): void {
    // Have an error witb this and im not sure why.
    // this.movieService.addMovie(this.myMovie(1, 'Black Panther', 'Ryan Coogler', 2018, 'Action/Sci-Fi', 7.3, 'Assets/bp.webp'))

    this.movieService.getMovieById(2).subscribe({
      next: (data: Movie | undefined ) => this.movie = data,
      error: err => console.error("Error fetching Movies", err),
      complete:() => console.log("Movie data fetch complete!")
    })

  }

}
