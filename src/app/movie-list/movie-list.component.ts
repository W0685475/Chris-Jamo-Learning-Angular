import { Component, OnInit } from '@angular/core';
import { Movie } from '../Shared/Modules/movie';
import { MovieService } from '../Services/movie.service';
import { Router } from '@angular/router';
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  standalone: true,
  imports: [
    MovieListItemComponent
  ],
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movieList: Movie[] = [];
  error: string | null = null;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe({
      next: (data: Movie[]) => {
        this.movieList = data;
        this.error = null;  // Clear error if fetch succeeds
      },
      error: (err) => {
        this.error = 'Error fetching movies';
        console.error("Error fetching movies:", err);
      },
      complete: () => console.log("Movie data fetch complete!")
    });
  }

  editMovie(id: number): void {
    this.router.navigate(['/modify-movie', id]);
  }

  deleteMovie(id: number): void {
    this.movieService.deleteMovie(id).subscribe({
      next: () => {
        this.getMovies(); // Refresh the list after deletion.
      },
      error: (err) => {
        this.error = 'Error deleting movie';
        console.error("Error deleting movie:", err);
      }
    });
  }
}
