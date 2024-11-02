import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "../Services/movie.service";
import { Movie } from "../Shared/Modules/movie";
import { NgIf } from "@angular/common";
import { catchError, of } from "rxjs";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    // FormsModule,
    // NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrls: ['./modify-list-item.component.css']
})
export class ModifyListItemComponent implements OnInit {
  movieForm: FormGroup;
  movie: Movie | undefined;
  movies: Movie[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      id: [''],
      movieName: [0],
      directorName: [0],
      filmCompany: [''],
      goodFilm: [false],
        // ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(movies => {
      this.movies = movies;
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieById(+id).subscribe(movie => {
        if (movie) {
          this.movie = movie;
          this.movieForm.patchValue(movie);
        }
      });
    }
  }
  //       catchError(error => {
  //         console.error('Error fetching movie', error);
  //         return of(undefined);
  //       })
  //     ).subscribe(movie => {
  //       if (movie) {
  //         this.movie = movie;
  //         this.movieForm.patchValue(movie);
  //       }
  //     });
  //   }
  // }

  onSubmit(): void {
    const updatedMovie = this.movieForm.value;

    // Check if we're updating an existing movie
    if (updatedMovie.id) {
      this.movieService.updateMovie(updatedMovie);
    } else {
      this.movieService.addMovie(updatedMovie);
    }
    this.router.navigate(['movies']);
  }

  //       catchError(error => {
  //         console.error('Error updating movie', error);
  //         return of(undefined); // Return an observable of undefined in case of error
  //       })
  //     ).subscribe(() => {
  //       console.log('Movie updated successfully');
  //       this.movieForm.reset(); // Reset the form after successful update
  //       this.router.navigate(['/movies']); // Navigate back to movie list
  //     });
  //   } else {
  //     // Generate a new ID for the new movie
  //     movie.id = this.movieService.generateNewId(); // Generate a new ID
  //     this.movieService.addMovie(movie).pipe(
  //       catchError(error => {
  //         console.error('Error adding new movie', error);
  //         return of(undefined); // Return an observable of undefined in case of error
  //       })
  //     ).subscribe(() => {
  //       console.log('Movie added successfully');
  //       this.movieForm.reset(); // Reset the form after successful addition
  //       this.router.navigate(['/movies']); // Navigate back to movie list
  //     });
  //   }
  // }

  onDelete(): void {
    if (this.movie) {
      this.movieService.deleteMovie(this.movie.id).subscribe(() => {
        this.router.navigate(['/movies']);
      });
    }
    }

  //   const id = this.movieForm.get('id')?.value;
  //   if (id) {
  //     this.movieService.deleteMovie(id).pipe(
  //       catchError(error => {
  //         console.error('Error deleting movie', error);
  //         return of(undefined);
  //       })
  //     ).subscribe(() => {
  //       this.router.navigate(['/movies']);
  //     });
  //   }
  // }

  navigateToMovieList(): void {
    this.router.navigate(['/movies']);
  }
}
