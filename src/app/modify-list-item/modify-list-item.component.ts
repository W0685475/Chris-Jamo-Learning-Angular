import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from "../Services/movie.service";
import { Movie } from "../Shared/Modules/movie";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modify-list-item',
  templateUrl: './modify-list-item.component.html',
  standalone: true,
  styleUrls: ['./modify-list-item.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class ModifyListItemComponent implements OnInit {
  movieForm!: FormGroup;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Initialize form group in ngOnInit
    this.movieForm = this.fb.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      director: ['', Validators.required],
      releaseYear: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
      genre: ['', Validators.required],
      rating: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      image: ['']
    });

    // Fetch the movie ID from route and get movie details if ID exists
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.movieService.getMovieById(id).subscribe({
        next: (movie) => {
          if (movie) {
            this.movieForm.patchValue(movie);
          } else {
            this.error = 'Movie not found';
          }
        },
        error: (err) => {
          this.error = 'Error fetching movie';
          console.error('Error fetching movie:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      const movie: Movie = this.movieForm.value;

      if (this.movieForm.get('id')?.value) {
        this.movieService.updateMovie(movie).subscribe({
          next: () => this.router.navigate(['/movies']),
          error: (err) => {
            this.error = 'Error updating movie';
            console.error('Error updating movie:', err);
          }
        });
      } else {
        this.movieService.addMovie(movie).subscribe({
          next: () => this.router.navigate(['/movies']),
          error: (err) => {
            this.error = 'Error adding movie';
            console.error('Error adding movie:', err);
          }
        });
      }
    }
  }

  navigateToMovieList(): void {
    this.router.navigate(['/movies']);
  }
}
