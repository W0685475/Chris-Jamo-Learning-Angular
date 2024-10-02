import {Component, Input} from '@angular/core';
import {Movie} from "../Shared/Modules/movie";
import {MovieListItemComponent} from "../movie-list-item/movie-list-item.component";
import {NgClass, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {MovieService} from "../Services/movie.service";

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
  constructor(private movieService: MovieService) {
  }

  @Input() movie?: Movie;


}
