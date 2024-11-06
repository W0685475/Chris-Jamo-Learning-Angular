import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../Services/movie.service";
import {Movie} from "../Shared/Modules/movie";
import {NgIf} from "@angular/common";
import {catchError, map, of, switchMap} from "rxjs";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  movieForm: FormGroup;
  movie: Movie | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {
    this.movieForm = this.fb.group({
      id: [''],                    // ID is required
      title: [''],                 // Title is required
      director: [''],              // Director is required
      releaseYear: [''],  // Release year is required and within valid range
      genre: [''],                 // Genre is required
      rating: [''],  // Rating is required and within 0 to 10
      image: ['']
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieService.getMovieById(+id).subscribe(movie => {
        if(movie) {
          this.movie = movie;

          this.movieForm.patchValue(movie);
        }
      });
    }
  }

  onSubmit(): void {
    const movie: Movie = this.movieForm.value;

    // Check if we're updating an existing student
    if (movie.id) {
      console.log('Updating movie', movie);
      this.movieService.updateMovie(movie);
    } else {
      // For adding a new student, generate a new ID
      const newId = this.movieService.generateNewId(); // This method will create a new ID
      movie.id = newId;
      movie.image = "Image_not_available.jpg";
      this.movieService.addMovie(movie);
    }

    this.router.navigate(['/movies']);
  }

  onDelete(): void {
    const id = this.movieForm.get('id')?.value;
    if (id) {
      this.movieService.deleteMovie(id);
      this.router.navigate(['/movies']);
    }
  }

  navigateToMovieList(): void {
    this.router.navigate(['movies']);
  }
}
