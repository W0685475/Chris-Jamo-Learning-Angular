import {Component, Input, OnInit} from '@angular/core';
import {NgOptimizedImage, NgStyle} from "@angular/common";
import {Movie} from "../Shared/Modules/movie";
import {MovieListComponent} from "../movie-list/movie-list.component";
import {NgForOf} from "@angular/common";
import {MovieService} from "../Services/movie.service";
import {movies} from "../../data/movies-mockcontent";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-list-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ], // Add NgStyle here
  templateUrl: './movie-list-item.component.html',
  styleUrl: './movie-list-item.component.css'
})
export class MovieListItemComponent implements OnInit {
  movie: Movie | undefined;
  movieList: Movie[] = [];
  currentIndex: number = 0;
  @Input() movieListItem?: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe(users => {
      this.movieList = movies;

      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));
        if (id) {
          this.currentIndex = this.movieList.findIndex(user => user.id === id);
          this.movie = this.movieList[this.currentIndex];
        }
      });
    });
  }
  goBack(): void {
    this.router.navigate(['/movies']);
  }

  goForward(): void {
    if (this.currentIndex < this.movieList.length -1) {
      this.currentIndex++;
      this.router.navigate(['/movies', this.movieList[this.currentIndex].id]);
    }
  }

  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/movies', this.movieList[this.currentIndex].id]);
    }
  }
}


